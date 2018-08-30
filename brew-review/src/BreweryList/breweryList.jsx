import React from 'react';
import ReviewList from '../ReviewList/reviewList';
import CreateReview from '../CreateReview/createReview';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <li key={brewery.id}>
                <span>{brewery.name}</span>
                <small>{brewery.city}, {brewery.state}</small>
                <p>{brewery.description}</p>
                <small>{brewery.website_url}</small>
                <br/>
                <h4>Reviews for {brewery.name}</h4>

                <ReviewList
                    breweryId={brewery.id}
                    reviews={props.reviews}
                    deleteReview={props.deleteReview}
                    showReviewModal={props.showReviewModal}
                    closeAndEditReview={props.closeAndEditReview}
                    handleReviewFormChange={props.handleReviewFormChange}
                    reviewToEdit={props.reviewToEdit}
                />

                <CreateReview breweryId={'http://localhost:8000/api/breweries/' + brewery.id} addReview={props.addReview}/>

                <button onClick={props.showModal.bind(null, brewery.id)}>Edit</button>
                <button onClick={props.deleteBrewery.bind(null, brewery.id)}>Delete</button>
            </li>
        )
    });

    return (
        <ul>
            {breweryList}
        </ul>
    )
}

export default BreweryList;