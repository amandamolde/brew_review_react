import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody,
         ListGroup, ListGroupItem, CardGroup, Card, CardText, } from 'reactstrap';
import EditReview from '../EditReview/editReview';

const ReviewList = (props) => {
    // console.log(props.breweryId, ' this is breweryID at ReviewList');

    let apiBreweryId = 'http://localhost:8000/api/breweries/' + props.breweryId;
    
    const reviewList = props.reviews.map((review, i) => {
        // console.log(review.brewery, ' this is review.brewery')
        if (apiBreweryId === review.brewery) {

            return (
                <Card key={review.id}>
                    <Row>
                        <Col>
                            <CardText>Atmosphere</CardText>
                            <CardText>Beer Tenders</CardText>
                            <CardText>Beer Selection</CardText>
                        </Col>
                        <Col>
                            <CardText>{review.atmosphere}</CardText>
                            <CardText>{review.beer_tenders}</CardText>
                            <CardText>{review.beer_selection}</CardText>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <CardText>{review.notes}</CardText>
                        </Col>
                    </Row>
                    

                    <Row className="editReviewBtn">
                        <Col>
                            <Button color="link" onClick={props.showReviewModal.bind(null, review.id)}>Edit</Button>
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
                        </Col>
                        <Col>
                            <Button color="link" onClick={props.deleteReview.bind(null, review.id)}>Delete</Button>
                        </Col>
                    </Row>
                </Card>
            )
        } else {
            return('')
        }
    })

    return (
        <Container>
            <Col>
                {reviewList}
            </Col>
        </Container>
    )
};

export default ReviewList;