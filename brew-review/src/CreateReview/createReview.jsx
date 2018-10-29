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
                    <Input type="select" name="atmosphere" onChange={this.updateReview}>
                        <option selected disabled hidden>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <FormText>Required</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Staff</Label>
                    <Input type="select" name="beer_tenders" onChange={this.updateReview}>
                        <option selected disabled hidden>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <FormText>Required</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Selection</Label>
                    <Input type="select" name="beer_selection" onChange={this.updateReview}>
                        <option selected disabled hidden>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <FormText>Required</FormText>
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