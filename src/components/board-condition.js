import React from 'react';

export default function BoardCondition() {
	return (
		<div className="board-condition">
			<label htmlFor="condition">Condition:</label>
            <div id="condition">
                <input type="checkbox" id="condition-new" />
                <label htmlFor="condition-new">new</label>
                <br />
                <input type="checkbox" id="condition-great" />
                <label htmlFor="condition-great">great</label>
                <br />
                <input type="checkbox" id="condition-decent" />
                <label htmlFor="condition-decent">decent</label>
                <br />
                <input type="checkbox" id="condition-wrecked" />
                <label htmlFor="condition-wrecked">wrecked</label>
            </div>
		</div>
	);
};