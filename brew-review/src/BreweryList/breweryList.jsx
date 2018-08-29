import React from 'react';

const BreweryList = (props) => {

    const breweryList = props.breweries.map((brewery, i) => {
        return (
            <li key={brewery.id}>
                <span>{brewery.name}</span>
                <small>{brewery.city}, {brewery.state}</small>
                <p>{brewery.description}</p>
                <small>{brewery.website_url}</small>
                <button onClick={props.showModal.bind(null, brewery.id)}>Edit</button>
                <button onClick={props.deleteBrewery.bind(null, brewery.id)}>Delete</button>
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