import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, 
        Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, 
        CardBody, CardLink, CardHeader, CardFooter, ButtonDropdown,
        DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReviewList from '../ReviewList/reviewList';
import CreateReview from '../CreateReview/createReview';
import EditBrewery from '../EditBrewery/editBrewery';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <div className="breweryInfo">
            <CardDeck>
                <Card key={brewery.id}>
                    <CardHeader>
                        <ButtonDropdown isOpen={props.dropdownOpen} toggle={props.dropdownToggle}>
                            <DropdownToggle caret>Options</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Edit Brewery</DropdownItem>
                                <DropdownItem>Delete Brewery</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
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
                        <Button onClick={props.showModal.bind(null, brewery.id)}>Edit</Button>
                        <Button onClick={props.deleteBrewery.bind(null, brewery.id)}>Delete</Button>
                        <Modal isOpen={props.editBreweryModal} toggle={props.editBreweryToggle}>
                            <ModalHeader toggle={props.editBreweryToggle}>Edit brewery information:</ModalHeader>
                            <ModalBody>
                                <EditBrewery closeAndEdit={props.closeAndEdit} handleFormChange={props.handleFormChange} breweryToEdit={props.breweryToEdit} editBreweryToggle={props.editBreweryToggle}/>
                            </ModalBody>
                        </Modal>
                    </CardFooter>
                </Card>
            </CardDeck>
                    <h4>Reviews for {brewery.name}</h4>
                    <div className="addReviewBtn">
                        <Button color="primary" onClick={props.addReviewToggle}>Review {brewery.name}</Button>
                        <Modal isOpen={props.addReviewModal} toggle={props.addReviewToggle}>
                            <ModalHeader toggle={props.addReviewToggle}>Add a review of {brewery.name}:</ModalHeader>
                            <ModalBody>
                                <CreateReview breweryId={'http://localhost:8000/api/breweries/' + brewery.id} addReview={props.addReview} addReviewToggle={props.addReviewToggle}/>
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
                {breweryList}
            </Row>
        </Container>
    )
}

export default BreweryList;