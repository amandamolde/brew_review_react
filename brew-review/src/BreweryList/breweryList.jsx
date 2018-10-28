import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, 
        Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, 
        CardBody, CardLink, CardHeader, CardFooter, } from 'reactstrap';
import ReviewList from '../ReviewList/reviewList';
import CreateReview from '../CreateReview/createReview';
import EditBrewery from '../EditBrewery/editBrewery';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <div className="breweryInfo">
                <Card key={brewery.id}>
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
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{brewery.name}</CardTitle>
                        <CardSubtitle>{brewery.city}, {brewery.state}</CardSubtitle>
                        <CardLink href={brewery.website_url}>Website</CardLink>
                        <hr/>
                        <CardText>{brewery.description}</CardText>
                        <Button>Check out the Reviews!</Button>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>
                </Card>
                    <h4>Reviews for {brewery.name}</h4>
                    <div className="addReviewBtn">
                        <Button color="primary" onClick={() => props.addReviewToggle(brewery)}>Review {brewery.name}</Button>
                        <Modal isOpen={props.addReviewModal} toggle={props.addReviewToggle}>
                            <ModalHeader toggle={props.addReviewToggle}>Add a review of {props.breweryToReviewName}:</ModalHeader>
                            <ModalBody>
                                {/* <CreateReview breweryId={'http://localhost:8000/api/breweries/' + brewery.id} addReview={props.addReview} addReviewToggle={props.addReviewToggle}/> */}
                                <CreateReview breweryId={'http://localhost:8000/api/breweries/' + props.breweryToReviewId} addReview={props.addReview} addReviewToggle={props.addReviewToggle}/>
                            </ModalBody>
                        </Modal>
                    </div>
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
            </div>
        )
    });

    return (
        <Container>
            <Row>
                <CardDeck>
                    {breweryList}
                </CardDeck>
            </Row>
        </Container>
    )
}

export default BreweryList;