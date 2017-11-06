import React from 'react';
import './results.css';
import {Link} from 'react-router-dom';
import Aside from './aside';
import BoardCard from './board-card';
import SearchForm from './search-form';
import queryString from 'query-string';
import {API_BASE_URL} from '../config';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: "No boards found. Change your search parameters and try again!"
        }
    }

    componentDidMount() {
        const getResults = () => {
            fetch(`${API_BASE_URL}/boards?${query}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                else {
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

        let query = window.location.search;
        const parsedQuery = queryString.parse(query);
        //if zip code/radius search present, need to get coordinates
        if(parsedQuery.zip) {
                //GoogleMaps Geocoder API turns the zip into a pair of lat and lng coordintes
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${parsedQuery.zip},USA`)
                .then(res => {
                    if(res.ok) {
                        return res.json();
                    }
                    else {
                        throw new Error('No Response from GoogleMaps API');
                    }
                })
                .then(res => {
                    parsedQuery.lng = res.results[0].geometry.location.lng;
                    parsedQuery.lat = res.results[0].geometry.location.lat;
                    //update query with lat and lng 
                    query = queryString.stringify(parsedQuery);
                    getResults();
                })
                .catch(err => {
                    console.error(err);
                })
        }
        else {
            getResults();
        }
    }
    	
    render() {
        let results

        if (this.state.results === "No boards found. Change your search parameters and try again!") {
            results = (
                <h4>{this.state.results}</h4>
            )
        }
        else {
            results = this.state.results.map((board, index) => {
                //removes location object from board object to please the React Gods!
                let betterBoard = Object.assign({}, board, {location: "better"});
                return (
                    <div key={index}>
                    <Link to={`/board?_id=${board._id}`} className="board-card" ><BoardCard board={betterBoard} /></Link>
                    <hr />
                    </div>
                )
            })
        }

        return (
    		<div className="row">
                <div className="large-3 columns ">
                    <label htmlFor="refine-search">Refine Your Search</label>
                    <SearchForm name="refine-search" history={this.props.history}/>
                </div>
                <div className="large-6 columns">
                    {results}
                </div>
                <Aside/>
            </div>
    	)
    }
};