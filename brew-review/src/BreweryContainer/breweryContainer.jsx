import React, { Component } from 'react';
import BreweryList from '../BreweryList/breweryList';
import CreateBrewery from '../CreateBrewery/createBrewery';
import EditBrewery from '../EditBrewery/editBrewery';

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
            showReviewEdit: false,
            editReviewId: null,
            reviewToEdit: {
                brewery: '',
                atmosphere: '',
                beer_tenders: '',
                beer_selection: '',
                notes: '',
                photo: '',
            }
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

    closeAndEdit = async (e) => {
        e.preventDefault();

        try {
            console.log('trying to edit brewery!!!');
            const editResponse = await fetch('http://localhost:8000/api/breweries/' + this.state.editBreweryId, {
                method: 'PUT',
                body: JSON.stringify(this.state.breweryToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const editResponseJson = await editResponse.json();
            const editedBreweryArray = this.state.breweries.map((brewery) => {

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

    // ============================== Reviews API Calls ==============================

    getReviews = async () => {

        const reviews = await fetch('http://localhost:8000/api/reviews/');
        const reviewsJson = await reviews.json();
        return reviewsJson;
    }

    addReview = async(review, e) => {
        e.preventDefault();

        try {
            const createdReview = await fetch('http://localhost:8000/api/reviews/', {
                method: 'POST',
                body: JSON.stringify(review),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const createdReviewJson = await createdReview.json();
            console.log(createdReviewJson, ' this is createdReviewJson');
            this.setState({reviews: [...this.state.reviews, createdReviewJson]});
        } catch(err) {
            console.log(err);
        }
    }

    deleteReview = async (id, e) => {
        e.preventDefault();
        console.log('deleteReview function is being called, this is the id: ', id);
        try {
            const deleteReview = await fetch('http://localhost:8000/api/reviews/' + id, {
                method: 'DELETE',
            });

            if (deleteReview.status === 204) {
                this.setState({reviews: this.state.reviews.filter((review, i) => review.id !== id) });
            } else {
                console.log('error when deleting review');
            }
        } catch (err) {
            console.log(err);
        }
    }

    showReviewModal = (id, e) => {
        const reviewToEdit = this.state.reviews.find((review) => review.id === id)
        this.setState({
            showEdit: true,
            editReviewId: id,
            reviewToEdit: reviewToEdit,
        });
    }

    closeAndEditReview = async (e) => {
        e.preventDefault();

        try {
            console.log('trying to edit review!!!');
            const editReview = await fetch('http://localhost:8000/api/reviews/' + this.state.editReviewId, {
                method: 'PUT',
                body: JSON.stringify(this.state.reviewToEdit),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const editReviewJson = await editReview.json();
            const editedReviewArray = this.state.reviews.map((review) => {

                if (review.id === this.state.editReviewId) {
                    review.atmosphere = editReviewJson.atmosphere;
                    review.beer_tenders = editReviewJson.beer_tenders;
                    review.beer_selection = editReviewJson.beer_selection;
                    review.notes = editReviewJson.notes;
                    review.photo = editReviewJson.photo;
                }
                return review;
            });

            this.setState({
                reviews: editedReviewArray,
                showReviewEdit: false,
            });
        } catch (err) {
            console.log(err);
        }
    }

    handleReviewFormChange = (e) => {

        this.setState({
            reviewToEdit: { ...this.state.reviewToEdit, [e.target.name]: e.target.value }
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
                    reviews={this.state.reviews}
                    addReview={this.addReview}
                    deleteReview={this.deleteReview}
                    showReviewModal={this.showReviewModal}
                    closeAndEditReview={this.closeAndEditReview}
                    handleReviewFormChange={this.handleReviewFormChange}
                />

                <CreateBrewery addBrewery={this.addBrewery} />

                {this.state.showEdit ? <EditBrewery closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} breweryToEdit={this.state.breweryToEdit}/> : null}
            </div>

        )
    }
}

export default BreweryContainer;