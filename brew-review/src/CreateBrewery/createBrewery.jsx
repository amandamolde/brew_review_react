import React, { Component } from 'react';
import { Button, ModalFooter } from 'reactstrap';

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
            <form onSubmit={this.props.addBrewery.bind(this, this.state)}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={this.updateBrewery}/>
                </label>
                <label>
                    City:
                    <input type="text" name="city" onChange={this.updateBrewery}/>
                </label>
                <label>
                    State:
                    <input type="text" name="state" onChange={this.updateBrewery}/>
                </label>
                <label>
                    Description:
                    <input type="text" name="description" onChange={this.updateBrewery}/>
                </label>
                <label>
                    Website:
                    <input type="text" name="website_url" onChange={this.updateBrewery}/>
                </label>
                <ModalFooter>
                    <Button type="submit" onClick={this.props.addBreweryToggle}>Submit</Button>
                    <Button color="secondary" onClick={this.props.addBreweryToggle}>Cancel</Button>
                </ModalFooter>
            </form>
        )
    }
}

export default CreateBrewery;