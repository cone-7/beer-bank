import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
  
class BeerDescription extends React.Component {
    render() {
        const {beer, closeFunction} = this.props;
        const foodPairing = beer.food_pairing.map((food, index) => {
            return <li key={index}>{food}</li>;
        });
        return( 
            <div className={style.description}>
                <img className={style.img} src={beer.image_url}></img>
                <span className={style.close} onClick={closeFunction}>x</span>
                <div className={style.textContainer}>
                    <span className={style.title}>{beer.name}</span><br></br>
                    <span className={style.tagline}>{beer.tagline}</span><br></br>
                    <strong>IBU:</strong> <span >{beer.ibu}</span>
                    <strong>ABV:</strong> <span >{beer.abv}</span>
                    <strong>EBC:</strong> <span >{beer.ebc}</span><br></br><br></br>
                    <span className={beer.description}>
                        {beer.brewers_tips}
                    </span><br></br><br></br>
                    <strong>Best served with:</strong><br></br>
                    <ul>
                        {foodPairing}
                    </ul>
                </div>                              
            </div>
        )
    }
}

BeerDescription.propTypes = {
    beer: PropTypes.object,
    closeFunction: PropTypes.func
}

export default BeerDescription;
