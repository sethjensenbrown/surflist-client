import React from 'react';

export default function BoardType() {
	return (
		<div className="board-type">
			<label htmlFor="type">Type of Board:</label>
            <div id="type">
                <input type="checkbox" id="type-short" />
                <label htmlFor="type-short">shortboard ( - 7' )</label>
                <br />
                <input type="checkbox" id="type-fun" />
                <label htmlFor="type-fun">funboard ( 7' - 9' )</label>
                <br />
                <input type="checkbox" id="type-long" />
                <label htmlFor="type-long">longboard ( 9' + )</label>
                <br />
                <input type="checkbox" id="type-sup" />
                <label htmlFor="type-sup">SUP</label>
            </div>
		</div>
	);
};