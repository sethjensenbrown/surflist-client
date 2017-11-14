import React from 'react';
import Aside from './aside';
import BoardCard from './board-card';
import OfferForm from './offer-form';
import {API_BASE_URL} from '../config';

export default class Board extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            results: "Loading, please wait...",
            offering: false
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
        let query = window.location.search;
        let offer =''; 
        if(this.state.offering) {
            offer = (<OfferForm boardId={query} onSuccess={() => this.setState({offering: false})}/>)
        }
        else {
            offer = (<button className="button" onClick={() => this.setState({offering: true}) }>Make An Offer</button>)
        }
		return (
			<div className="row">
	            <div className="large-8 columns">
	                <BoardCard board={this.state.results[0]} />
                    <hr/>
	                {offer}
	            </div>
	            <Aside/>
	        </div>
		);
	}
};