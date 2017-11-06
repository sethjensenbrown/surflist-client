import React from 'react';
import './board-card.css';

//displays relevant info on one board for sale
export default function BoardCard(props) {
	const board = props.board;

	return (
		<div className="board-post">
            <h4>{board.title} (${board.price})</h4>
            <img alt="(the board for sale)" className="post-img" src={board.image} />
            <p><strong>Price:</strong> ${board.price}</p>
            <p><strong>Location:</strong> {board.state}</p>
            <p><strong>Type:</strong> {board['board-type']}</p>
            <p><strong>Condition:</strong> {board['board-condition']}</p>
            <p><strong>Description:</strong> {board.description}</p>
        </div>
	);
};