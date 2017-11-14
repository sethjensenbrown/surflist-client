import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {API_BASE_URL} from '../config';
import {required, nonEmpty, email} from '../validators.js';

export class OfferForm extends React.Component {
	//creates custom field elements for form vlidation
    renderField({input, placeholder, type, element, meta: {touched, error} }) { 
        const Element = element || 'input';
        return (
            <div>
                {touched && (error && <span style={{color: "red", fontSize: 12}}>*{error}</span>)}
                <Element {...input} placeholder={placeholder} type={type}/>
            </div>
        )
    }

	onSubmit(values) {
		const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(values)
        }
	    // update the board in the database
	    console.log(this.props.boardId)
	    fetch(`${API_BASE_URL}/offer${this.props.boardId}`, options)
	    .then(res => {
	        //if succesful, alert close offer section
	        if (res.ok) {
	            alert('Your offer has been sent.');
	            this.props.onSuccess();
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
				<label htmlFor="email">Your Email:</label>
				<Field component={this.renderField} type="email" name="email" 
				placeholder="ex: bigwavedave@surflist.com" validate={[required, email]}/>
				<label htmlFor="message">Message:</label>
				<Field component={this.renderField} element="textarea" name="message" 
				placeholder="Type your message to the seller here." validate={[required, nonEmpty]}/>
				<button className="button" onClick={this.props.handleSubmit(values => this.onSubmit(values))}>Send Offer</button>
			</form>
		)
	}
}

export default reduxForm({
    form: 'offer-form',
    onSubmitFail: () =>
        alert('Submission Error: check your entries and try again.')
})(OfferForm);
