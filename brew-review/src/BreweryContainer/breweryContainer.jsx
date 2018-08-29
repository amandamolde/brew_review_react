import React, { Component } from 'react';

class BreweryContainer extends Component {
    constructor() {
        super();

        this.state = {
            breweries: [],
            reviews: [],
        }
    }
    
    componentDidMount() {
        this.getBreweries().then((breweries) => {
            this.setState({ breweries: breweries})
        }).catch((err) => {
            console.log(err);
        });
        this.getReviews().then((reviews) => {
            this.setState({ reviews: reviews })
        }).catch((err) => {
            console.log(err);
        })
    }

    // =============== Breweries API Calls ===============

    getBreweries = async () => {

        const breweries = await fetch('http://localhost:8000/api/breweries');
        const breweriesJson = await breweries.json();
        return breweriesJson
    }

    addBrewery = async (brewery, e) => {
        e.preventDefault();
        
        try {
            const createdBrewery = await fetch('http://localhost:8000/api/breweries', {
                method: 'POST',
                body: JSON.stringify(brewery),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const createdBreweryJson = await createdBrewery.json();
            console.log(createdBreweryJson, ' this is createdBreweryJson');
        }
    }
}