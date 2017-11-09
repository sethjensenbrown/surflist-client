import React from 'react';
import Aside from './aside';
import BoardCard from './board-card';
import {API_BASE_URL} from '../config';

export default class Board extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            results: "Loading, please wait..."
        }
    }

	componentDidMount() {
		let query = window.location.search;
        fetch(`${API_BASE_URL}/boards${query}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    this.setState({
                        results: 'No boards found, please try again'
                    });
                    throw new Error('Bad response from SurfList API');
                }
            })
            .then(res => {
                this.setState({
                    results: res
                })
            })
            .catch(err => {
                console.error(err);
            })
	}

	render() { 
		return (
			<div className="row">
	            <div className="large-8 columns">
	                <BoardCard board={this.state.results[0]} />
	                <p><button className="button">Make An Offer</button></p>
	            </div>
	            <Aside/>
	        </div>
		);
	}
};