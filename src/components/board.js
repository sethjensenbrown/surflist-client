import React from 'react';
import Aside from './aside';
import BoardCard from './board-card';
import {EXAMPLE_BOARDS} from './EXAMPLE_BOARDS';

export default function Board() {
	return (
		<div className="row">
            <div className="large-8 columns">
                <BoardCard board={EXAMPLE_BOARDS[0]} />
                <p><button className="button">Make An Offer</button></p>
            </div>
            <Aside/>
        </div>
	);
};