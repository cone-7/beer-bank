import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerContainer.module.css';
import ModalComponent from './ModalComponent.js';
import CardBeer from './CardBeer.js';
  
class BeerContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.toggle = this.toggle.bind(this);
        this.controlFav = this.controlFav.bind(this);
    }

    toggle(beer){
        this.setState({
            show: !this.state.show, 
            beers: this.state.beers,
            beerSelected: beer
        });
    }

    controlFav(beer){
        beer.isFav = !beer.isFav;
        this.props.clickFav(beer);
    }

    render() {
        let imgs = this.props.beers.map((beer, index) => {
            return (
                <CardBeer
                    key={index}
                    beer={beer} 
                    toggle={this.toggle}
                    controlFav={this.controlFav}
                    index={index}>
                </CardBeer>
            )
        })
        return (
        <div className={styles.container} >
            {imgs}
            { this.state.show && 
                <ModalComponent 
                    beer={this.state.beerSelected} 
                    closeFunction={this.toggle}
                    setNewBeer={this.setNewBeer}>
                </ModalComponent>
            }
        </div>
        );
    }
}

BeerContainer.propTypes = {
    beers: PropTypes.array,
    clickFav: PropTypes.func
}

export default BeerContainer;
