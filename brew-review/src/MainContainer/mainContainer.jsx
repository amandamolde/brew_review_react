import React, { Component } from 'react';
import BreweryContainer from '../BreweryContainer/breweryContainer';

class MainContainer extends Component {
    render() {
        return (
            <div className="MainContainer">
                <BreweryContainer />
            </div>
        );
    }
}

export default MainContainer;