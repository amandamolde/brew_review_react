import React from 'react';

const ReviewList = (props) => {

    const reviewList = props.reviews.map((review, i) => {
        return (
            <li key={review.id}>
                <span>{review.name}</span>
                <span>{review.atmosphere}</span>
                <span>{review.beer_tenders}</span>
                <span>{review.beer_selection}</span>
                <p>{review.notes}</p>
                <button onClick={props.showReviewModal.bind(null, review.id)}>Edit</button>
                <button onClick={props.deleteReview.bind(null, review.id)}>Delete</button>
            </li>
        )
    });

    return (
        <ul>
            {reviewList}
        </ul>
    )
}

export default ReviewList;