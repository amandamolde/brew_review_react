import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import ReviewList from '../ReviewList/reviewList';
import CreateReview from '../CreateReview/createReview';
import EditBrewery from '../EditBrewery/editBrewery';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <Col>

                <div className="breweryInfo" key={brewery.id}>
                    <div>
                        <span>{brewery.name}</span>
                        <span>{brewery.city}, {brewery.state}</span>
                        <span>{brewery.website_url}</span>
                        <p>{brewery.description}</p>
                    </div>
                    <br/><br/><br/>
                    <h4>Reviews for {brewery.name}</h4>
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

                    <div className="addReviewComponent">
                        <CreateReview breweryId={'http://localhost:8000/api/breweries/' + brewery.id} addReview={props.addReview}/>
                    </div>
                    <br/>
                    <h4>Update/Delete Brewery</h4>
                    <div className="editBreweryBtn">
                        <Button color="primary" onClick={props.deleteBrewery.bind(null, brewery.id)}>Edit Brewery</Button>
                        <Modal isOpen={props.editBreweryModal} toggle={props.editBreweryToggle}>
                            <ModalHeader toggle={props.editBreweryToggle}>Edit Brewery Information Below:</ModalHeader>
                            <ModalBody>
                                <EditBrewery closeAndEdit={props.closeAndEdit} handleFormChange={props.handleFormChange} breweryToEdit={props.breweryToEdit}/>
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