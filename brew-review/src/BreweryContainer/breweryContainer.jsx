import React, { Component } from 'react';
import BreweryList from '../BreweryList/breweryList';
import CreateBrewery from '../CreateBrewery/createBrewery';

class BreweryContainer extends Component {
    constructor() {
        super();

        this.state = {
            breweries: [],
            reviews: [],
            showEdit: false,
            editBreweryId: null,
            breweryToEdit: {
                name: '',
                city: '',
                state: '',
                description: '',
                website_url: '',
            },
        }
    }
    
    componentDidMount() {
        this.getBreweries().then((breweries) => {
            this.setState({ breweries: breweries})
        }).catch((err) => {
            console.log(err);
        });
        // this.getReviews().then((reviews) => {
        //     this.setState({ reviews: reviews })
        // }).catch((err) => {
        //     console.log(err);
        // })
    }

    // ============================== Breweries API Calls ==============================

    getBreweries = async () => {

        const breweries = await fetch('http://localhost:8000/api/breweries/');
        const breweriesJson = await breweries.json();
        return breweriesJson;
    }

    addBrewery = async (brewery, e) => {
        e.preventDefault();
        
        try {
            const createdBrewery = await fetch('http://localhost:8000/api/breweries/', {
                method: 'POST',
                body: JSON.stringify(brewery),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const createdBreweryJson = await createdBrewery.json();
            console.log(createdBreweryJson, ' this is createdBreweryJson');
            this.setState({breweries: [...this.state.breweries, createdBreweryJson]});
        } catch(err) {
            console.log(err);
        }
    }
    
    deleteBrewery = async (id, e) => {
        e.preventDefault();
        console.log('deleteBrewery function is being called, this is the id: ', id);
        try {
            const deleteBrewery = await fetch('http://localhost:8000/api/breweries/' + id, {
                method: 'DELETE',
            });

            if (deleteBrewery.status === 204) {
                this.setState({ breweries: this.state.breweries.filter((brewery, i) => brewery.id !== id) });
            } else {
                console.log('error when deleting brewery');
            }
        } catch (err) {
            console.log(err);
        }
    }

    showModal = (id, e) => {
        const breweryToEdit = this.state.breweries.find((brewery) => brewery.id === id)
        this.setState({
            showEdit: true,
            editBreweryId: id,
            breweryToEdit: breweryToEdit,
        });
    }

    closeAndEdit = async (breweryId) => {

        try {
            const editResponse = await fetch('http://localhost:8000/api/breweries/' + breweryId, {
                method: 'PUT',
                body: JSON.stringify(this.state.breweryToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const editResponseJson = await editResponse.json();
            const editedBreweryArray = this.state.posts.map((brewery) => {

                if (brewery.id === this.state.editBreweryId) {
                    brewery.name = editResponseJson.name;
                    brewery.city = editResponseJson.city;
                    brewery.state = editResponseJson.state;
                    brewery.description = editResponseJson.description;
                    brewery.website_url = editResponseJson.website_url;
                }
                return brewery;
            });

            this.setState({
                breweries: editedBreweryArray,
                showEdit: false,
            });
        } catch (err) {
            console.log(err);
        }
    }
    handleFormChange = (e) => {

        this.setState({
            breweryToEdit: { ...this.state.breweryToEdit, [e.target.name]: e.target.value }
        });
    }

    // ============================== What is Being Displayed on Page ==============================
    render() {
        return (
            <div>
                <BreweryList 
                    breweries={this.state.breweries}
                    deleteBrewery={this.deleteBrewery}
                    showModal={this.showModal}
                />

                <CreateBrewery addBrewery={this.addBrewery} />

                {/* {this.state.showEdit ? <EditBrewery closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} breweryToEdit={this.state.breweryToEdit}/> : null} */}
            </div>

        )
    }
}

export default BreweryContainer;