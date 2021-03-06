import React from 'react';
import Aside from './aside';
import EditBoardForm from './edit-board-form';
import queryString from 'query-string';
import {API_BASE_URL} from '../config';

const query = queryString.parse(window.location.search);

export default class EditBoard extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			initialValue: {}
		}
	}

	findBoard() {
		fetch(`${API_BASE_URL}/boards?_id=${query._id}`, {method: 'GET'})
		.then(res => {
			if (res.ok) {
				return (res.json());
			}
			throw new Error('Bad response from SurfList API')
		})
		.then(body => {
			this.setState({
				initialValues: Object.assign({}, body[0])
			});
		})
		.catch(err => {
			alert(err);
			this.props.history.push('/');
		})
	}

	//finds board from URL query id and preloads form
	componentDidMount() {
		if (query['_id'] !== undefined) {
			this.findBoard();
		}
	}

	render() { 
		return (
			<div className="row">
	            <div className="medium-4 columns">
	                <EditBoardForm history={this.props.history} boardId={query._id} initialValues={this.state.initialValues}/>
	            </div>
	            <Aside/>
	        </div>
		)
	}
};