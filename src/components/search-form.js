import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class SearchForm extends React.Component {
    
    onSubmit(values) {
        const keys = Object.keys(values);
        let query = "";
        keys.forEach(key => {
            query += `${key}=${values[key]}&`;
        });
        this.props.history.push(`/results?${query}`);
    }

	render() {
        let buttonLabel = "Find a board";
        if (this.props.name === "refine-search") {
            buttonLabel = "Refine search";
        }
        return (
            <form 
            id="search" 
            name="search" 
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

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

                <div className="search-by-zip">
                    <label htmlFor="location-zip">Search by Zip Code:</label>
                    <div id="location-zip">
                        <Field name="location-zip" component="input" type="number" placeholder="49125"/>
                        <Field name="location-radius" component="select">
                            <option value="">Select search radius</option>
                            <option value="15">15 miles</option>
                            <option value="25">25 miles</option>
                            <option value="50">50 miles</option>
                            <option value="100">100 miles</option>
                            <option value="250">250 miles</option>
                        </Field>
                    </div>
                </div>

                <div className="price-range">
                    <label htmlFor="price">Price:</label>
                    <div id="price">
                        <input name="price-min" component="input" type="number" placeholder="min"/>
                        <input name="price-max" component="input" type="number" placeholder="max"/>
                    </div>
                </div>

                <div className="board-type">
                    <label htmlFor="type">Type of Board:</label>
                    <div id="type">
                        <Field name="type-short" component="input" type="checkbox"/>
                        <label htmlFor="type-short">shortboard ( - 7' )</label>
                        <br />
                        <Field name="type-fun"  component="input" type="checkbox"/>
                        <label htmlFor="type-fun">funboard ( 7' - 9' )</label>
                        <br />
                        <Field name="type-long" component="input" type="checkbox"/>
                        <label htmlFor="type-long">longboard ( 9' + )</label>
                        <br />
                        <Field name="type-sup"  component="input" type="checkbox"/>
                        <label htmlFor="type-sup">SUP</label>
                    </div>
                </div>

                <div className="board-condition">
                    <label htmlFor="condition">Condition:</label>
                    <div id="condition">
                        <Field name="condition-new" component="input" type="checkbox" />
                        <label htmlFor="condition-new">new</label>
                        <br />
                        <Field name="condition-great" component="input" type="checkbox" />
                        <label htmlFor="condition-great">great</label>
                        <br />
                        <Field name="condition-decent" component="input" type="checkbox" />
                        <label htmlFor="condition-decent">decent</label>
                        <br />
                        <Field name="condition-wrecked" component="input" type="checkbox" />
                        <label htmlFor="condition-wrecked">wrecked</label>
                    </div>
                </div>

                <button type="submit" className="button">{buttonLabel}</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'search',
})(SearchForm);