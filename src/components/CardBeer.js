import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerContainer.module.css';
  
class CardBeer extends React.Component {
    render() {
        const {beer, index, toggle, controlFav} = this.props;
        return( 
            <div className={[styles.card, styles.cardUniversal].join(' ')} key={beer.id}>
                <div>
                    { !beer.isFav ? 
                        <span 
                            className={styles.cardFav} 
                            onClick={() => controlFav(beer, index)}>
                            ✩
                        </span>
                        :
                        <span 
                            className={styles.cardFavSelected} 
                            onClick={() => controlFav(beer, index)}>
                            ★
                        </span>
                    }
                </div>
                <img onClick={() => toggle(beer)} src={beer.image_url}></img><br></br>
                <span className={styles.beerName}>{beer.name}</span><br></br>
                <span className={styles.beerDescription}>{beer.tagline}</span>
            </div>
        )
    }
}

CardBeer.propTypes = {
    beer: PropTypes.object,
    index: PropTypes.number, 
    toggle: PropTypes.func, 
    controlFav: PropTypes.func
}

export default CardBeer;
