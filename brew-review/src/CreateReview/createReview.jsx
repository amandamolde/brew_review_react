import React, { Component } from 'react';
import { Button, ModalFooter, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

class CreateReview extends Component {
    constructor() {
        super();

        this.state = {
            brewery: '',
            atmosphere: '',
            beer_tenders: '',
            beer_selection: '',
            notes: '',
            photo: '',
        }
    }
    updateReview = (e) => {
        let breweryId = this.props.breweryId;
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
        this.setState({ brewery: breweryId })
    }

    render() {
        // console.log(this.props, ' this is props on createReview');
        return (
            <Form onSubmit={this.props.addReview.bind(this, this.state)}>
                <FormGroup>
                    <Label>Atmosphere</Label>
                    <Input type="number" min="1" max="5" name="atmosphere" onChange={this.updateReview}/>
                    <FormText>Required, please pick a number between 1 and 5</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Staff</Label>
                    <Input type="number" min="1" max="5" name="beer_tenders" onChange={this.updateReview}/>
                    <FormText>Required, please pick a number between 1 and 5</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Selection</Label>
                    <Input type="number" min="1" max="5" name="beer_selection" onChange={this.updateReview}/>
                    <FormText>Required, please pick a number between 1 and 5</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Notes</Label>
                    <Input type="textarea" name="notes" onChange={this.updateReview}/>
                </FormGroup>
                <ModalFooter>
                    <Button type="submit" onClick={this.props.addReviewToggle}>Submit</Button>
                    <Button color="secondary" onClick={this.props.addReviewToggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        )
    }
}

export default CreateReview;