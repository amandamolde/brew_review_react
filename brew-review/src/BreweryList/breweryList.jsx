import React from 'react';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <li key={brewery._id}>
                <span>{brewery.name}</span>
                <small>{brewery.city}, {brewery.state}</small>
                <p>{brewery.description}</p>
                <small>{brewery.website_url}</small>
                <button onClick={props.showModal.bind(null, brewery._id)}>Edit</button>
                <button onClick={props.deleteBrewery.bind(null, brewery._id)}>Delete</button>
            </li>
        )
    });

    return (
        <ul>
            {breweryList}
        </ul>
    )
}

export default BreweryList;