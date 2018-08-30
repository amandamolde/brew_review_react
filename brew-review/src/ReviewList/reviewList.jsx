import React from 'react';
import EditReview from '../EditReview/editReview';

const ReviewList = (props) => {
    // console.log(props.breweryId, ' this is breweryID at ReviewList');

    let apiBreweryId = 'http://localhost:8000/api/breweries/' + props.breweryId;
    
    const reviewList = props.reviews.map((review, i) => {
        // console.log(review.brewery, ' this is review.brewery')
        if (apiBreweryId === review.brewery) {

            return (
                <li key={review.id}>
                    <span>{review.atmosphere}</span>
                    <span>{review.beer_tenders}</span>
                    <span>{review.beer_selection}</span>
                    <p>{review.notes}</p>
                    <img src={review.photo} alt=""/>
                    <button onClick={props.showReviewModal.bind(null, review.id)}>Edit Review</button>
                    <button onClick={props.deleteReview.bind(null, review.id)}>Delete Review</button>
                    <EditReview
                        closeAndEditReview={props.closeAndEditReview}
                        handleReviewFormChange={props.handleReviewFormChange}
                        reviewToEdit={props.reviewToEdit}
                    />
                </li>
            )
        } else {
            return('')
        }
    })

    return (
        <ul>
            {reviewList}
        </ul>
    )
};

export default ReviewList;