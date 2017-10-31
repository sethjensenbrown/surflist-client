import React from 'react';

export default function BoardCard(props) {
	const board = props.board;

	return (
		<div className="board-post">
            <h4>{board.title} (${board.price})</h4>
            <img alt="board" className="post-img" src={board.image} />
            <p><strong>Price:</strong> ${board.price}</p>
            <p><strong>Location:</strong> {board.location}</p>
            <p><strong>Type:</strong> {board.type}</p>
            <p><strong>Condition:</strong> {board.condition}</p>
            <p><strong>Description:</strong> {board.description}</p>
        </div>
	);
};