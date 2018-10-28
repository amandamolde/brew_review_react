import React from 'react';
import { Button, ModalFooter, Col, Row, Form, FormGroup, FormText, Label, Input } from 'reactstrap';

const EditBrewery = (props) => {
    console.log(props, ' this is props at edit brewery');
    return (
        <div>
            <Form onSubmit={props.closeAndEdit}>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="name" onChange={props.handleFormChange} value={props.breweryToEdit.name}/>
                    <FormText>Required</FormText>
                </FormGroup>
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <Label>City</Label>
                            <Input type="text" name="city" onChange={props.handleFormChange} value={props.breweryToEdit.city}/>
                            <FormText>Required</FormText>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label>State</Label>
                            <Input type="select" name="state" onChange={props.handleFormChange} value={props.breweryToEdit.state}>
                                <option>AL</option>
                                <option>AK</option>
                                <option>AZ</option>
                                <option>AR</option>
                                <option>CA</option>
                                <option>CO</option>
                                <option>CT</option>
                                <option>DE</option>
                                <option>FL</option>
                                <option>GA</option>
                                <option>HI</option>
                                <option>ID</option>
                                <option>IL</option>
                                <option>IN</option>
                                <option>IA</option>
                                <option>KS</option>
                                <option>KY</option>
                                <option>LA</option>
                                <option>ME</option>
                                <option>MD</option>
                                <option>MA</option>
                                <option>MI</option>
                                <option>MN</option>
                                <option>MS</option>
                                <option>MO</option>
                                <option>MT</option>
                                <option>NE</option>
                                <option>NV</option>
                                <option>NH</option>
                                <option>NJ</option>
                                <option>NM</option>
                                <option>NY</option>
                                <option>NC</option>
                                <option>ND</option>
                                <option>OH</option>
                                <option>OK</option>
                                <option>OR</option>
                                <option>PA</option>
                                <option>RI</option>
                                <option>SC</option>
                                <option>SD</option>
                                <option>TN</option>
                                <option>TX</option>
                                <option>UT</option>
                                <option>VT</option>
                                <option>VA</option>
                                <option>WA</option>
                                <option>WV</option>
                                <option>WI</option>
                                <option>WY</option>
                            </Input>
                            <FormText>Required</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" name="description" onChange={props.handleFormChange} value={props.breweryToEdit.description}/>
                </FormGroup>
                <FormGroup>
                    <Label>Website</Label>
                    <Input type="text" name="website_url" onChange={props.handleFormChange} value={props.breweryToEdit.website_url}/>
                </FormGroup>
                <FormGroup>
                    <Label>Photo URL</Label>
                    <Input type="text" name="photo_url" onChange={props.handleFormChange} value={props.breweryToEdit.photo_url}/>
                    <FormText>Required</FormText>
                </FormGroup>
                <ModalFooter>
                    <Button type="submit" onClick={props.editBreweryToggle}>Submit</Button>
                    <Button type="submit" onClick={props.editBreweryToggle}>Cancel</Button>
                </ModalFooter>
            </Form>
        </div>
    )
}

export default EditBrewery;