import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
import BeerService from '../services/BeerService.js';
import SimilarBeers from './SimilarBeers.js';
import BeerDescription from './BeerDescription';
  
class ModalContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            similarBeers: [],
            beer: props.beer
        }
        this.beerService = new BeerService();
        this.getSimilarBeers = this.getSimilarBeers;
        this.setNewBeer = this.setNewBeer.bind(this);
    }

    async getSimilarBeers(yeast){
        const beers = await this.beerService.getSimilarBeersByYeast(yeast);
        return beers;
    }

    componentDidMount(){
        this.getSimilarBeers(this.props.beer.ingredients.yeast).then((res) => {
            this.setState({similarBeers: res})
        });
    }

    setNewBeer(beer){
        this.getSimilarBeers(this.props.beer.ingredients.yeast).then((res) => {
            this.setState({beer: beer, show: this.state.show, similarBeers: res})
        });
    }

    render() {
        const {beer} = this.state;
        const similarBeers = this.state.similarBeers.map(
            (beer) => <SimilarBeers key={beer.id} beer={beer} setNewBeer={this.setNewBeer}></SimilarBeers>
        )
        return (
            <div className={style.modal}>
                <div className={style.modalContainer}>
                    <BeerDescription beer={beer} closeFunction={this.props.closeFunction}></BeerDescription>
                    <div>
                        <div className={[style.title, style.floatLeft].join(' ')}>
                            You might also like:
                        </div>
                        <div className={style.similarContainer}>
                            {similarBeers}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ModalContainer.propTypes = {
    beer: PropTypes.object,
    closeFunction: PropTypes.func,
    setNewBeer: PropTypes.func
}

export default ModalContainer;
