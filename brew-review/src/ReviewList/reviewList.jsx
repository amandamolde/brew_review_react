import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import EditReview from '../EditReview/editReview';

const ReviewList = (props) => {
    // console.log(props.breweryId, ' this is breweryID at ReviewList');

    let apiBreweryId = 'http://localhost:8000/api/breweries/' + props.breweryId;
    
    const reviewList = props.reviews.map((review, i) => {
        // console.log(review.brewery, ' this is review.brewery')
        if (apiBreweryId === review.brewery) {

            return (
                <Row key={review.id}>
                    <span>Atmosphere: {review.atmosphere}</span><br/>
                    <span>Beer Tenders: {review.beer_tenders}</span><br/>
                    <span>Beer Selection: {review.beer_selection}</span><br/>
                    <p>Notes: {review.notes}</p>
                    <img src={review.photo} alt=""/><br/>

                    <h4>Update/Delete Review</h4>
                    <div className="editReviewBtn">
                        <Button color="primary" onClick={props.showReviewModal.bind(null, review.id)}>Edit Review</Button>
                        <Modal isOpen={props.editReviewModal} toggle={props.editReviewToggle}>
                            <ModalHeader toggle={props.editReviewToggle}>Edit review:</ModalHeader>
                            <ModalBody>
                                <EditReview
                                    closeAndEditReview={props.closeAndEditReview}
                                    handleReviewFormChange={props.handleReviewFormChange}
                                    reviewToEdit={props.reviewToEdit}
                                    editReviewToggle={props.editReviewToggle}
                                />
                            </ModalBody>
                        </Modal>
                    </div>
                    <Button color="danger" onClick={props.deleteReview.bind(null, review.id)}>Delete Review</Button>
                </Row>
            )
        } else {
            return('')
        }
    })

    return (
        <Container>
                {reviewList}
        </Container>
    )
};

export default ReviewList;