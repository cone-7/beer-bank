import React from 'react';
import PropTypes from 'prop-types';
import styles from './TopBar.module.css';
  
class TopBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            searchText: ''
        }
    }

    handleChange(event) {
        this.setState({ searchText: event.target.value });
        this.props.searchFunction(event.target.value);
    }

    render() {
        return (
        <div className={styles.topbar}>
            <div className={styles.links}>
                <span onClick={() => this.props.setPage('home')}>Home</span>
                <span onClick={() => this.props.setPage('fav')}>Favourite</span>
            </div>
            <div className={styles.containerTitle}>
                <span>The Beer Bank</span><br></br>
                <span className={styles.titleDescription}>Find your favourite beer here</span>
            </div>
            <div className={styles.search}>
                <input type="text" 
                    value={this.state.searchText} 
                    onChange={this.handleChange.bind(this)}></input>
            </div>
        </div>
        );
    }
}

TopBar.propTypes = {
    title: PropTypes.string,
    searchFunction: PropTypes.func,
    setPage: PropTypes.func
}

export default TopBar;
