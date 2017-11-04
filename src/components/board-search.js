import React from 'react';
import SearchForm from './search-form';
import Aside from './aside';

export default function BoardSearch(props) {
	return (
        <div className="row">
            <div className="medium-4 columns">
                <SearchForm name="find-board" history={props.history}/>
            </div>
            <Aside/>
        </div>
    );
};