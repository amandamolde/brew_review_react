import React from 'react';
import { Button, Form, FormGroup, ModalFooter, Label, Input } from 'reactstrap';

const EditReview = (props) => {
    console.log(props, ' this is props at edit review');
    return (
        <div>
            <Form onSubmit={props.closeAndEditReview}>
                <FormGroup>
                    <Label>Atmosphere</Label>
                    <Input type="text" name="atmosphere" onChange={props.handleReviewFormChange} value={props.reviewToEdit.atmosphere}/>
                </FormGroup>
                <FormGroup>
                    <Label>Staff</Label>
                    <Input type="text" name="beer_tenders" onChange={props.handleReviewFormChange} value={props.reviewToEdit.beer_tenders}/>
                </FormGroup>
                <FormGroup>
                    <Label>Selection</Label>
                    <Input type="text" name="beer_selection" onChange={props.handleReviewFormChange} value={props.reviewToEdit.beer_selection}/>
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