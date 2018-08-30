import React, { Component } from 'react';
import { Button } from 'reactstrap';

class CreateReview extends Component {
    constructor() {
        super();

        this.state = {
            brewery: '',
            atmosphere: '',
            beer_tenders: '',
            beer_selection: '',
            notes: '',
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
            <form onSubmit={this.props.addReview.bind(this, this.state)}>
                <label>
                    Atmosphere:
                    <input type="text" name="atmosphere" onChange={this.updateReview}/>
                </label>
                <label>
                    Beer Tenders:
                    <input type="text" name="beer_tenders" onChange={this.updateReview}/>
                </label>
                <label>
                    Beer Selection:
                    <input type="text" name="beer_selection" onChange={this.updateReview}/>
                </label>
                <label>
                    Notes:
                    <input type="text" name="notes" onChange={this.updateReview}/>
                </label>
                <Button type="submit" onClick={this.props.addReviewToggle}>Add Review</Button>
            </form>
        )
    }
}

export default CreateReview;