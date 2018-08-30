import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import ReviewList from '../ReviewList/reviewList';
import CreateReview from '../CreateReview/createReview';
import EditBrewery from '../EditBrewery/editBrewery';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <Col key={brewery.id}>

                <div className="breweryInfo">
                    <div>
                        <span>{brewery.name}</span>
                        <br/>
                        <span>{brewery.city}, {brewery.state}</span>
                        <br/>
                        <span>{brewery.website_url}</span>
                        <br/>
                        <p>{brewery.description}</p>
                    </div>
                    <br/><br/><br/>
                    <h4>Reviews for {brewery.name}</h4>
                    <div className="addReviewBtn">
                        <Button color="primary" onClick={props.addReviewToggle}>Review {brewery.name}</Button>
                        <Modal isOpen={props.addReviewModal} toggle={props.addReviewToggle}>
                            <ModalHeader toggle={props.addReviewToggle}>Add a review of {brewery.name} below:</ModalHeader>
                            <ModalBody>
                                <CreateReview breweryId={'http://localhost:8000/api/breweries/' + brewery.id} addReview={props.addReview} addReviewModal={props.addReviewModal}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={props.addReviewToggle}>Cancel</Button>
                            </ModalFooter>
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
                    />

                    <br/>
                    <h4>Update/Delete Brewery</h4>
                    <div className="editBreweryBtn">
                        <Button color="primary" onClick={props.showModal.bind(null, brewery.id)}>Edit Brewery</Button>
                        <Modal isOpen={props.editBreweryModal} toggle={props.editBreweryToggle}>
                            <ModalHeader toggle={props.editBreweryToggle}>Edit Brewery Information Below:</ModalHeader>
                            <ModalBody>
                                <EditBrewery closeAndEdit={props.closeAndEdit} handleFormChange={props.handleFormChange} breweryToEdit={props.breweryToEdit} editBreweryToggle={props.editBreweryToggle}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={props.editBreweryToggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <Button color="danger" onClick={props.deleteBrewery.bind(null, brewery.id)}>Delete Brewery</Button>
                </div>
            </Col>
        )
    });

    return (
        <Container>
            <Row>
                {breweryList}
            </Row>
        </Container>
    )
}

export default BreweryList;