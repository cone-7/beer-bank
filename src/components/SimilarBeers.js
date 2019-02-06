import React from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';
  
class SimilarBeers extends React.Component {
    render() {
        const {beer, setNewBeer} = this.props;
        return( 
            <div  onClick={() => setNewBeer(beer)} className={style.similarCard}>
                <img className={style.smallImg} src={beer.image_url}></img><br></br>
                <span className={style.smallName}>{beer.name}</span>
            </div>
        )
    }
}

SimilarBeers.propTypes = {
    beer: PropTypes.object,
    setNewBeer: PropTypes.func
}

export default SimilarBeers;
