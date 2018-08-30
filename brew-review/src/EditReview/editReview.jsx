import React from 'react';

const EditReview = (props) => {
    console.log(props, ' this is props at edit review');
    return (
        <div>
            <h4>Edit Review</h4>
            <form onSubmit={props.closeAndEditReview}>
                <label>
                    Edit Atmosphere Rating:
                    <input type="text" name="atmosphere" onChange={props.handleReviewFormChange} value={props.reviewToEdit.atmosphere}/>
                </label>
                <label>
                    Edit Beer Tender Rating:
                    <input type="text" name="beer_tenders" onChange={props.handleReviewFormChange} value={props.reviewToEdit.beer_tenders}/>
                </label>
                <label>
                    Edit Beer Selection Rating:
                    <input type="text" name="beer_selection" onChange={props.handleReviewFormChange} value={props.reviewToEdit.beer_selection}/>
                </label>
                <label>
                    Edit Notes:
                    <input type="text" name="notes" onChange={props.handleReviewFormChange} value={props.reviewToEdit.notes}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditReview;