import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {ifZipValidZip, maxGtMin, minLtMax, reqIfZip} from '../validators.js';

export class SearchForm extends React.Component {

    handleSearch(values) {
        const keys = Object.keys(values);
        let query = "";
        keys.forEach(key => {
            query += `${key}=${values[key]}&`;
        });
        query = query.slice(0,-1);
        this.props.history.push(`/results?${query}`);
    }
    
    onSubmit(_values) {
        let values = Object.assign({}, _values)
        if (values.zip) {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${values.zip},USA`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('No response from GoogleMaps API');
            })
            .then(res => {
                    //adds lat and lng to board object for zip code search capabilities
                    let lng = res.results[0].geometry.location.lng;
                    let lat = res.results[0].geometry.location.lat;
                    values.lat = lat;
                    values.lng = lng;
                    this.handleSearch(values);
                })
            .catch(err => {
                console.error(err);
                alert('Something went wrong');
            })  
        }
        else {
            this.handleSearch(values);
        }
    }

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

    // creates custom select field elements from form validation
    renderSelectField({ input, meta: { touched, error }, children }) {
        return (
            <div>
                {touched && error && <span style={{color: "red", fontSize: 12}}>*{error}</span>}
                <select {...input}>
                    {children}
                </select>
            </div>
        )
    }

	render() {
        return (
            <form 
            id="search" 
            name="search" 
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

                <div className="select-state">
                    <label htmlFor="state">State:</label>
                    <Field name="state" component="select">
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
                        <Field name="zip" component={this.renderField} type="number" 
                        placeholder="49125" validate={[ifZipValidZip]}/>
                        <Field name="radius" component={this.renderSelectField} validate={[reqIfZip]}>
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
                        <Field name="price-min" component={this.renderField} type="number" 
                        placeholder="min" validate={[minLtMax]}/>
                        <Field name="price-max" component={this.renderField} type="number" 
                        placeholder="max" validate={[maxGtMin]}/>
                    </div>
                </div>

                <div className="board-type">
                    <label htmlFor="type">Type of Board:</label>
                    <div id="type">
                        <Field name="shortboard" component="input" type="checkbox"/>
                        <label htmlFor="shortboard">shortboard ( - 7' )</label>
                        <br />
                        <Field name="funboard"  component="input" type="checkbox"/>
                        <label htmlFor="funboard">funboard ( 7' - 9' )</label>
                        <br />
                        <Field name="longboard" component="input" type="checkbox"/>
                        <label htmlFor="longboard">longboard ( 9' + )</label>
                        <br />
                        <Field name="sup"  component="input" type="checkbox"/>
                        <label htmlFor="sup">SUP</label>
                    </div>
                </div>

                <div className="board-condition">
                    <label htmlFor="condition">Condition:</label>
                    <div id="condition">
                        <Field name="new" component="input" type="checkbox" />
                        <label htmlFor="new">new</label>
                        <br />
                        <Field name="great" component="input" type="checkbox" />
                        <label htmlFor="great">great</label>
                        <br />
                        <Field name="decent" component="input" type="checkbox" />
                        <label htmlFor="decent">decent</label>
                        <br />
                        <Field name="wrecked" component="input" type="checkbox" />
                        <label htmlFor="wrecked">wrecked</label>
                    </div>
                </div>

                <button type="submit" className="button">Find a board</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'search',
    onSubmitFail: () =>
        alert('Submission Error: check your entries and try again.')
})(SearchForm);