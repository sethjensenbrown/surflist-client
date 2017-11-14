import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {API_BASE_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL} from '../config';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {required, nonEmpty, isValidZip, email, confirmEmail} from '../validators.js';

export class NewBoardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
        };
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, res) => {
            if (err) {
                console.error(err);
            }
            if (res.body.secure_url !== '') {
                this.setState({
                   uploadedFileCloudinaryUrl: res.body.secure_url 
                });
            }
        })
    }

    onImageDrop(files) {
        if (files[0].size > 20 * 1024 * 1024) {
            alert('File size exceeds max of 20 MB!')
        }
        else {
            this.setState({
                uploadedFile: files[0]
            });
            this.handleImageUpload(files[0]);
        }
    }

    //POST the board to the database
    postBoard(board) {
        const options = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(board)
        }
        fetch(`${API_BASE_URL}/boards`, options)
        .then(res => {
            if (res.ok) {
                alert('Your board is posted. Check your email for confirmation!');
                this.props.history.push('/');
            }
            else { 
                throw new Error('No response from SurfList API')
            }
        })
    }

    processValues(values) {
        const board = Object.assign({}, values, {image: this.state.uploadedFileCloudinaryUrl});
        //gets lat and lng from zip using GoogleMaps Geocoding API
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
                board.location = {
                    type: "Point",
                    coordinates: [lng, lat]
                }
                this.postBoard(board);
            })
        .catch(err => {
            alert('Uh oh, soething went wrong!');
        })  
    }

    onSubmit(values) {
        if(!values['board-type']) {
            alert('Plesase select a board type');
        } 
        else if (!values['board-condition']) {
            alert('Plesase select a board condition');
        }
        else if (this.state.uploadedFileCloudinaryUrl === '') {
            alert('Plesase select an image');
        }
        else {this.processValues(values);}
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
            id="new-board-form" 
            name="new-board-form" 
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <label htmlFor="title">Title:</label>
                <div id="title">
                    <Field name="title" component={this.renderField} type="text" 
                    placeholder="ex. Surfboard for Sale!" validate={[required, nonEmpty]}/>
                </div>

                <label htmlFor="price">Price:</label>
                <div id="price">
                    <Field name="price" component={this.renderField} type="number" 
                    placeholder="$100" validate={[required]}/>
                </div>

                <label htmlFor="description">Description:</label>
                <div id="description">
                    <Field name="description" component={this.renderField} element="textarea"
                    placeholder="ex. This board is super dope!" validate={[required, nonEmpty]}></Field>
                </div>

                <div className="select-state">
                    <label htmlFor="location-state">State:</label>
                    <Field name="state" component={this.renderSelectField} validate={[required]}>
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
                    <Field name="zip" component={this.renderField} type="number" 
                    placeholder="ex: 49125" validate={[required, isValidZip]}/>
                </div>

                <div className="board-type">
                    <label htmlFor="type">Type of Board:</label>
                    <div id="type">
                        <Field name="board-type" value="shortboard" component="input" type="radio"/>
                        <label htmlFor="type-short">shortboard ( - 7' )</label>
                        <br />
                        <Field name="board-type" value="funboard"  component="input" type="radio"/>
                        <label htmlFor="type-fun">funboard ( 7' - 9' )</label>
                        <br />
                        <Field name="board-type" value="longboard" component="input" type="radio"/>
                        <label htmlFor="type-long">longboard ( 9' + )</label>
                        <br />
                        <Field name="board-type" value="sup"  component="input" type="radio"/>
                        <label htmlFor="type-sup">SUP</label>
                    </div>
                </div>

                <div className="board-condition">
                    <label htmlFor="condition">Condition:</label>
                    <div id="condition">
                        <Field name="board-condition" value="new" component="input" type="radio" />
                        <label htmlFor="condition-new">new</label>
                        <br />
                        <Field name="board-condition" value="great" component="input" type="radio" />
                        <label htmlFor="condition-great">great</label>
                        <br />
                        <Field name="board-condition" value="decent" component="input" type="radio" />
                        <label htmlFor="condition-decent">decent</label>
                        <br />
                        <Field name="board-condition" value="wrecked" component="input" type="radio" />
                        <label htmlFor="condition-wrecked">wrecked</label>
                    </div>
                </div>

                <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? 
                    <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}>
                        <p>Drop an image or click to select</p>
                    </Dropzone>
                     :
                    <div>
                        <p>{this.state.uploadedFile.name}</p>
                        <img alt="board to sell" src={this.state.uploadedFileCloudinaryUrl} />
                    </div>}
                </div>

                <label htmlFor="email">Your Email:</label> 
                <div id="email"> 
                    <Field name="email" component={this.renderField} type="email" 
                    placeholder="bigwavedave@pitted.win" validate={[required, email]}/> 
                    <Field name="confirm-email" component={this.renderField} type="email" 
                    placeholder="Confirm Email" validate={[required, email, confirmEmail]}/> 
                </div>

                <p><button className="button">Let's Sell This Thing!</button></p>
            </form>
        )
    }
}

export default reduxForm({
    form: 'new-board-form',
    onSubmitFail: () =>
        alert('Submission Error: check your entries and try again.')
})(NewBoardForm);