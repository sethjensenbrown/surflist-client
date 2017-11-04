import React from 'react';
import './results.css';
import {Link} from 'react-router-dom';
import Aside from './aside';
import BoardCard from './board-card';
import SearchForm from './search-form';

import {EXAMPLE_BOARDS} from './EXAMPLE_BOARDS';

export default function Results(props) {
	return (
		<div className="row">
            <div className="large-3 columns ">
                <label htmlFor="refine-search">Refine Your Search</label>
                <SearchForm name="refine-search" history={props.history}/>
            </div>
            <div className="large-6 columns">
                <Link to="/board" className="board-card" ><BoardCard board={EXAMPLE_BOARDS[0]} /></Link>
                <hr />
                <Link to="/board" className="board-card" ><BoardCard board={EXAMPLE_BOARDS[1]} /></Link>
                <hr />
                <Link to="/board" className="board-card" ><BoardCard board={EXAMPLE_BOARDS[2]} /></Link>
            </div>
            <Aside/>
        </div>
	);
};