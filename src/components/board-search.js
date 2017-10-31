import React from 'react';
import './board-card.css';
import {Link} from 'react-router-dom';
import Aside from './aside';
import SelectState from './select-state';
import SearchByZip from './search-by-zip';
import PriceRange from './price-range';
import BoardType from './board-type';
import BoardCondition from './board-condition';

export default function BoardSearch() {
	return (
        <div className="row">
            <div className="medium-4 columns">
                <form id="search" name="search">
                    <SelectState/>                         
                    <p>-- or --</p>
                    <SearchByZip/>
                    <PriceRange/>
                    <BoardType/>
                    <BoardCondition/>
                    <Link to="/results"><button className="button">Find a board</button></Link>
                </form>
            </div>
            <Aside/>
        </div>
    );
};