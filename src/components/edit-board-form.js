import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {API_BASE_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL} from '../config';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {required, nonEmpty, isValidZip} from '../validators.js';

export class EditBoardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
            this.handleImageUpload(files[0]);
        }   
    }

    updateBoard(board) {
        const options = {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(board)
        }
        //update the board in the database
        fetch(`${API_BASE_URL}/boards?_id=${this.props.boardId}`, options)
        .then(res => {
            //if succesful, alert and redirect to homepage
            if (res.ok) {
                alert('Your board has been updated.');
                this.props.history.push('/');
            }
            else { 
                throw new Error('No response from SurfList API')
            }
        })
    }
    
    onSubmit(values) {
        const board = Object.assign({}, values, {_id: this.props.boardId});
        //if new image was uploaded, changes the image url
        if(this.state.uploadedFileCloudinaryUrl !== '') {
            board.image = this.state.uploadedFileCloudinaryUrl;
        }
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
                this.updateBoard(board);
            })
        .catch(err => {
            console.error(err);
            alert('Something went wrong');
        })  
    }

    handleDelete() {
        //confirm before deleting
        if (window.confirm('Are you sure you want to Delete this board from SurfList?')) {

            //DELETE IMG FROM CLOUD


            fetch(`${API_BASE_URL}/boards?_id=${this.props.boardId}`, {method: 'DELETE'})
            .then( res => {
                //if successful, alert and redirect to homepage
                if (res.ok) {
                    alert('Your board has been successfully deleted from SurfList');
                    this.props.history.push('/');
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
        let oldImage = '';
        if (this.props.initialValues) {
            oldImage = (
                <div>
                    <p>Old Image:</p>
                    <img alt="board to sell" src={this.props.initialValues.image} />
                </div>
        );}

        return (
            <form id="edit-board-form" name="edit-board-form" >

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

                {/*Dropzone from Image Upload to Cloudinary
                displays dropzone until an image is uploaded, then displays the image*/}
                <div>
                    {oldImage}
                    <br/>
                    {this.state.uploadedFileCloudinaryUrl === '' ? 
                    <div>
                        <p>Select a new image:</p>
                        <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}>
                            <p>Drop an image or click to select</p>
                        </Dropzone>
                    </div>
                    :
                    <div>
                        <p>New Image:</p>
                        <img alt="board to sell" src={this.state.uploadedFileCloudinaryUrl} />
                    </div>}
                    <br/>
                </div>

                <p> 
                    <button 
                    className="button" 
                    onClick={this.props.handleSubmit(values => this.onSubmit(values))}>
                        Lets Try This Again!
                    </button>
                    <button 
                    className="alert button" 
                    onClick={(event) => {
                        event.preventDefault();
                        this.handleDelete();
                    }}>
                        Remove This Board From Surflist
                    </button>
                </p>
            </form>
        )
    }
}

export default reduxForm({
    form: 'edit-board-form',
    onSubmitFail: () =>
        alert('Submission Error: check your entries and try again.')
})(EditBoardForm);