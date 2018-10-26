import React from 'react';
import { Button, ModalFooter, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

const EditBrewery = (props) => {
    console.log(props, ' this is props at edit brewery');
    return (
        <div>
            <Form onSubmit={props.closeAndEdit}>
                <FormGroup>
                    <Label>Edit Name</Label>
                    <Input type="text" name="name" onChange={props.handleFormChange} value={props.breweryToEdit.name}/>
                </FormGroup>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <Label>Edit City</Label>
                            <Input type="text" name="city" onChange={props.handleFormChange} value={props.breweryToEdit.city}/>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>Edit State</Label>
                            <Input type="text" name="state" onChange={props.handleFormChange} value={props.breweryToEdit.state}/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Edit Description</Label>
                    <Input type="textarea" name="description" onChange={props.handleFormChange} value={props.breweryToEdit.description}/>
                </FormGroup>
                <FormGroup>
                    <Label>Edit Website</Label>
                    <Input type="text" name="website_url" onChange={props.handleFormChange} value={props.breweryToEdit.website_url}/>
                </FormGroup>
                <ModalFooter>
                    <Button type="submit" onClick={props.editBreweryToggle}>Edit Brewery</Button>
                    <Button type="submit" onClick={props.editBreweryToggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </div>
    )
}

export default EditBrewery;