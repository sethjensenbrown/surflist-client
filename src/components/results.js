import React from 'react';
import './results.css';
import {Link} from 'react-router-dom';
import Aside from './aside';
import BoardCard from './board-card';
import SelectState from './select-state';
import SearchByZip from './search-by-zip';
import PriceRange from './price-range';
import BoardType from './board-type';
import BoardCondition from './board-condition';


import {EXAMPLE_BOARDS} from './EXAMPLE_BOARDS';

export default function Results() {
	return (
		<div className="row">
            <div className="large-3 columns ">
                <label htmlFor="refine-search">Refine Your Seacrh</label>
                <form id="refine-search" name="refine-search">
                    <SelectState/>                         
                    <p>-- or --</p>
                    <SearchByZip/>
                    <PriceRange/>
                    <BoardType/>
                    <BoardCondition/>
                    <p><button className="button">Update Results</button></p>
                </form>
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