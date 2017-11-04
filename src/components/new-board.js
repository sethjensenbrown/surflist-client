import React from 'react';
import Aside from './aside';
import NewBoardForm from './new-board-form';

export default function NewBoard(props) {
	return (
		<div className="row">
            <div className="medium-4 columns">
               <NewBoardForm history={props.history}/>
            </div>
            <Aside />
        </div>
	);
};