import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {API_BASE_URL} from '../config';

export class OfferForm extends React.Component {
	onSubmit(values) {
		const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values)
        }
	    // update the board in the database
	    fetch(`${API_BASE_URL}/offer${this.props.boardId}`, options)
	    .then(res => {
	        //if succesful, alert and redirect to homepage
	        if (res.ok) {
	            alert('Your offer has been sent.');
	            this.setState({offering: false})
	        }
	        else { 
	            throw new Error('No response from SurfList API')
	        }
	    })
	    .catch(err => {
	        console.error(err);
	        alert('Something went wrong');
	    })  
	}

	render() {
		return (
			<form id="offer-form" name="offer-form">
				<label htmlFor="email">Email:</label>
				<Field component="input" type="email" name="email" placeholder="ex: bigwavedave@surflist.com"/>
				<label htmlFor="message">Message:</label>
				<Field component="textarea" name="message" placeholder="Type your message to the seller here."/>
				<button className="button" onClick={this.props.handleSubmit(values => this.onSubmit(values))}>Send Offer</button>
			</form>
		)
	}
}

export default reduxForm({
    form: 'offer-form',
})(OfferForm);
