import React from 'react';
import './results.css';
import {Link} from 'react-router-dom';
import Aside from './aside';
import BoardCard from './board-card';
import RefineSearchForm from './refine-search-form';
import queryString from 'query-string';
import {API_BASE_URL} from '../config';

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: "Loading, please wait..."
        }
    }

    findBoards() {
        //get query and parse
        let query = window.location.search;
        const parsedQuery = queryString.parse(query);
        //convert all 'true' and 'false' values to boolean
        const keys = Object.keys(parsedQuery);
        for (let i=0; i<keys.length; i++) {
            if (parsedQuery[keys[i]] === 'true') {
                parsedQuery[keys[i]] = true;
            }
            else if (parsedQuery[keys[i]] === 'false') {
                parsedQuery[keys[i]] = false;
            }
        }

        //API request gets all boards matching query and sets initial value of form
        const getResults = () => {
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
                if (res.length > 0) {
                    this.setState({
                        results: res,
                        initialValues: parsedQuery
                    })
                }
                else {
                    this.setState({
                        results: 'No boards found, please try again',
                        initialValues: parsedQuery
                    })
                }
            })
            .catch(err => {
                console.error(err);
            })
        }

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
                    query = '?' + queryString.stringify(parsedQuery);
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

    //refines search when form submits
    onRefine() {
        this.setState({
            results: "Loading, please wait..."
        })
        this.findBoards();
    }    

    //finds boards on initial page load (redirect from BoardSearch)
    componentDidMount() {
        this.findBoards();
    }
    	
    render() {
        let results

        if (typeof this.state.results === "string") {
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
                        <Link to={`/board?_id=${board._id}`} className="board-card" >
                            <BoardCard board={betterBoard} />
                        </Link>
                        <hr />
                    </div>
                )
            })
        }

        return (
    		<div className="row">
                <div className="large-3 columns ">
                    <label htmlFor="refine-search">Refine Your Search</label>
                    <RefineSearchForm 
                    history={this.props.history} 
                    onSubmit={() => this.onRefine()} 
                    initialValues={this.state.initialValues}/>
                </div>
                <div className="large-6 columns">
                    {results}
                </div>
                <Aside/>
            </div>
    	)
    }
};