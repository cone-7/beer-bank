import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/TopBar.js'
import BeerContainer from './components/BeerContainer.js'
import BeerService from './services/BeerService.js';
import './index.css';

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        beers: [],
        originalBeers: null,
        favs: [],
        actualPage: 'home'
    }
    this.beerService = new BeerService();
    this.getBeers = this.getBeers.bind(this);
    this.searchBeer = this.searchBeer.bind(this);
    this.manageFav = this.manageFav.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  async getBeers(){
    const beers = await this.beerService.getBeers();
    return beers;
  }

  manageFav(beer, index){
    let favs = this.state.favs;
    const allBeers = this.state.beers;
    if(beer.isFav){
      favs.push(beer);
      allBeers[index] = beer;
      this.setState({beers: allBeers, originalBeers: this.state.originalBeers, favs: favs});
    } else {
      favs = favs.filter((favBeer) => favBeer.id !== beer.id)
      allBeers[index] = beer;
      this.setState({beers: allBeers, originalBeers: this.state.originalBeers, favs: favs});
    }
  }

  searchBeer(searchText){
    const filteredBeers = this.state.beers.filter(
      beer => beer.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 
    )
    if(!searchText){
      this.setState({beers: this.state.originalBeers, originalBeers: this.state.originalBeers});
    } else {
      if(!this.state.originalBeers){
        this.setState({beers: filteredBeers, originalBeers: this.state.beers});
      } else {
        this.setState({beers: filteredBeers, originalBeers: this.state.originalBeers});
      }      
    }
  }

  setPage(page){
    this.setState({beers: this.state.beers, originalBeers: this.state.originalBeers, favs: this.state.favs, actualPage: page});
  }

  componentDidMount(){
    this.getBeers().then((res) => this.setState({beers: res, originalBeers: this.state.originalBeers}));
  }

  render() {
    const actualBeer = this.state.actualPage === 'home' ? this.state.beers : this.state.favs;
    return (
      <div>
        <TopBar 
          title={this.state.actualPage}
          searchFunction={this.searchBeer}
          setPage={this.setPage}>
        </TopBar>
        <BeerContainer 
          beers={actualBeer}
          clickFav={this.manageFav}>
        </BeerContainer>
      </div>
    );
  }
}
  
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
