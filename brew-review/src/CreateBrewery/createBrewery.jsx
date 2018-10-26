import React, { Component } from 'react';
import { Button, ModalFooter, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateBrewery extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            city: '',
            state: '',
            description: '',
            website_url: '',
        }
    }
    updateBrewery = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render() {
        console.log(this.props, ' this is props on createBrewery');
        return (
            <Form onSubmit={this.props.addBrewery.bind(this, this.state)}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="name" onChange={this.updateBrewery}/>
                </FormGroup>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <Label>City</Label>
                            <Input type="text" name="city" onChange={this.updateBrewery}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>State</Label>
                            <Input type="text" name="state" onChange={this.updateBrewery}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" name="description" onChange={this.updateBrewery}/>
                </FormGroup>
                <FormGroup>
                    <Label>Website</Label>
                    <Input type="text" name="website_url" onChange={this.updateBrewery}/>
                </FormGroup>
                <ModalFooter>
                    <Button type="submit" onClick={this.props.addBreweryToggle}>Submit</Button>
                    <Button color="secondary" onClick={this.props.addBreweryToggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        )
    }
}

export default CreateBrewery;