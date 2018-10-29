import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, 
        Card, CardImg, CardTitle, CardText, CardColumns, CardSubtitle, 
        CardBody, CardLink, CardHeader, } from 'reactstrap';
import ReviewList from '../ReviewList/reviewList';
import CreateReview from '../CreateReview/createReview';
import EditBrewery from '../EditBrewery/editBrewery';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <Col key={brewery.id} className="breweryInfo">
                <Card>
                    <CardHeader>
                        <Button color="link" onClick={props.showModal.bind(null, brewery.id)}>Edit</Button>
                        <Button color="link" onClick={props.deleteBrewery.bind(null, brewery.id)}>Delete</Button>
                        <Modal isOpen={props.editBreweryModal} toggle={props.editBreweryToggle}>
                            <ModalHeader toggle={props.editBreweryToggle}>Edit brewery information:</ModalHeader>
                            <ModalBody>
                                <EditBrewery closeAndEdit={props.closeAndEdit} handleFormChange={props.handleFormChange} breweryToEdit={props.breweryToEdit} editBreweryToggle={props.editBreweryToggle}/>
                            </ModalBody>
                        </Modal>
                    </CardHeader>
                    <CardImg top width="100%" src={brewery.photo_url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{brewery.name}</CardTitle>
                        <CardTitle>{brewery.city}, {brewery.state}</CardTitle>
                        <CardLink href={brewery.website_url}>Website</CardLink>
                        <hr/>
                        <CardSubtitle>Overview</CardSubtitle>
                        <CardText>{brewery.description}</CardText>
                        <hr/>
                        <Button color="link" onClick={() => props.addReviewToggle(brewery)}>Add a Review</Button>
                        <Modal isOpen={props.addReviewModal} toggle={props.addReviewToggle}>
                            <ModalHeader toggle={props.addReviewToggle}>Add a review of {props.breweryToReviewName}:</ModalHeader>
                            <ModalBody>
                                <CreateReview breweryId={'http://localhost:8000/api/breweries/' + props.breweryToReviewId} addReview={props.addReview} addReviewToggle={props.addReviewToggle}/>
                            </ModalBody>
                        </Modal>
                        <hr/>
                        <CardSubtitle>Reviews</CardSubtitle>
                        <br/>
                        <ReviewList
                            breweryId={brewery.id}
                            reviews={props.reviews}
                            deleteReview={props.deleteReview}
                            showReviewModal={props.showReviewModal}
                            closeAndEditReview={props.closeAndEditReview}
                            handleReviewFormChange={props.handleReviewFormChange}
                            reviewToEdit={props.reviewToEdit}
                            editReviewModal={props.editReviewModal}
                            editReviewToggle={props.editReviewToggle}
                        />
                    </CardBody>
                </Card>
            </Col>
        )
    });

    return (
        <Container>
            <Row>
                <CardColumns>
                    {breweryList}
                </CardColumns>
            </Row>
        </Container>
    )
}

export default BreweryList;