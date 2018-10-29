import React from 'react';
import { Button, Form, FormGroup, ModalFooter, Label, Input, FormText } from 'reactstrap';

const EditReview = (props) => {
    console.log(props, ' this is props at edit review');
    return (
        <div>
            <Form onSubmit={props.closeAndEditReview}>
                <FormGroup>
                    <Label>Atmosphere</Label>
                    <Input type="number" min="1" max="5" name="atmosphere" onChange={props.handleReviewFormChange} value={props.reviewToEdit.atmosphere}/>
                    <FormText>Required, please pick a number between 1 and 5</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Staff</Label>
                    <Input type="number" min="1" max="5" name="beer_tenders" onChange={props.handleReviewFormChange} value={props.reviewToEdit.beer_tenders}/>
                    <FormText>Required, please pick a number between 1 and 5</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Selection</Label>
                    <Input type="number" min="1" max="5" name="beer_selection" onChange={props.handleReviewFormChange} value={props.reviewToEdit.beer_selection}/>
                    <FormText>Required, please pick a number between 1 and 5</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Notes</Label>
                    <Input type="textarea" name="notes" onChange={props.handleReviewFormChange} value={props.reviewToEdit.notes}/>
                </FormGroup>
                <ModalFooter>
                    <Button type="submit" onClick={props.editReviewToggle}>Submit</Button>
                    <Button color="secondary" onClick={props.editReviewToggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </div>
    )
}

export default EditReview;