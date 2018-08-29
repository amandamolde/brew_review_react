import React from 'react';

const EditBrewery = (props) => {
    console.log(props, ' this is props at edit brewery');
    return (
        <div>
            <h4>Edit Brewery</h4>
            <form onSubmit={props.closeAndEdit}>
                <label>
                    Edit Name:
                    <input type="text" name="name" onChange={props.handleFormChange} value={props.breweryToEdit.name}/>
                </label>
                <label>
                    Edit City:
                    <input type="text" name="city" onChange={props.handleFormChange} value={props.breweryToEdit.city}/>
                </label>
                <label>
                    Edit State:
                    <input type="text" name="state" onChange={props.handleFormChange} value={props.breweryToEdit.state}/>
                </label>
                <label>
                    Edit Description:
                    <input type="text" name="description" onChange={props.handleFormChange} value={props.breweryToEdit.description}/>
                </label>
                <label>
                    Edit Website:
                    <input type="text" name="website_url" onChange={props.handleFormChange} value={props.breweryToEdit.website_url}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditBrewery;