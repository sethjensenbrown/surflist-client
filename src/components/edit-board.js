import React from 'react';
import Aside from './aside';
import EditBoardForm from './edit-board-form';

export default function EditBoard() {
	return (
		<div className="row">
            <div className="medium-4 columns">
                <EditBoardForm />
            </div>
            <Aside/>
        </div>
	);
};