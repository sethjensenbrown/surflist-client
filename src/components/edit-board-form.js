import React from 'react';
import {reduxForm, Field} from 'redux-form';

/** 
 * File input workarround:
 * More info: http://redux-form.com/5.2.5/#/examples/file?_k=57hmlw
 */
const customFileInput = (field) => {
  delete field.input.value; // <-- just delete the value property
  return <input type="file" id="file" {...field.input} />;
};

export class EditBoardForm extends React.Component {
    
    onSubmit(values) {
        console.log(values);
    }

	render() {
        return (
            <form 
            id="edit-board-form" 
            name="edit-board-form" 
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="title">Title:</label>
                <div id="title">
                    <Field name="title" component="input" type="text" placeholder="ex. Surfboard for Sale!" />
                </div>

                <label htmlFor="price">Price:</label>
                <div id="price">
                    <Field name="price" component="input" type="number" placeholder="$100"/>
                </div>

                <label htmlFor="description">Description:</label>
                <div id="description">
                    <Field name="description" component="textarea" placeholder="ex. This board is super dope!"></Field>
                </div>

                <div className="select-state">
                    <label htmlFor="location-state">State:</label>
                    <Field name="location-state" component="select">
                        <option value="">Select a state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </Field>
                </div>

                <label htmlFor="location-zip">Zip Code:</label>
                <div id="location-zip">
                    <Field name="zip" component="input" type="text" placeholder="ex: 49125"/>
                </div>

                <div className="board-type">
                    <label htmlFor="type">Type of Board:</label>
                    <div id="type">
                        <Field name="type" value="type-short" component="input" type="radio"/>
                        <label htmlFor="type-short">shortboard ( - 7' )</label>
                        <br />
                        <Field name="type" value="type-fun"  component="input" type="radio"/>
                        <label htmlFor="type-fun">funboard ( 7' - 9' )</label>
                        <br />
                        <Field name="type" value="type-long" component="input" type="radio"/>
                        <label htmlFor="type-long">longboard ( 9' + )</label>
                        <br />
                        <Field name="type" value="type-sup"  component="input" type="radio"/>
                        <label htmlFor="type-sup">SUP</label>
                    </div>
                </div>

                <div className="board-condition">
                    <label htmlFor="condition">Condition:</label>
                    <div id="condition">
                        <Field name="condition" value="condition-new" component="input" type="radio" />
                        <label htmlFor="condition-new">new</label>
                        <br />
                        <Field name="condition" value="condition-great" component="input" type="radio" />
                        <label htmlFor="condition-great">great</label>
                        <br />
                        <Field name="condition" value="condition-decent" component="input" type="radio" />
                        <label htmlFor="condition-decent">decent</label>
                        <br />
                        <Field name="condition" value="condition-wrecked" component="input" type="radio" />
                        <label htmlFor="condition-wrecked">wrecked</label>
                    </div>
                </div>

                <label htmlFor="image">Image:</label>
                <div id="image">
                    <Field name="image" component={customFileInput} type="file"/>
                </div>

                <p> 
                    <button className="button">Lets Try This Again!</button>
                    <button className="alert button">Remove This Board From Surflist</button>
                </p>
            </form>
        )
    }
}

export default reduxForm({
    form: 'edit-board-form',
})(EditBoardForm);