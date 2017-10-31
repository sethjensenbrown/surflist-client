import React from 'react';
import Aside from './aside';
import SelectState from './select-state';
import BoardType from './board-type';
import BoardCondition from './board-condition';

export default function NewBoard() {
	return (
		<div className="row">
            <div className="medium-4 columns">
                <form id="search" name="search">
                    <label htmlFor="title">Title:</label>
                    <div id="title">
                        <input type="text" placeholder="ex. Surfboard for Sale!" />
                    </div>

                    <label htmlFor="price">Price:</label>
                    <div id="price">
                        <input type="number" id="price-input" name="price" placeholder="$100"/>
                    </div>

                    <label htmlFor="description">Description:</label>
                    <div id="description">
                        <textarea placeholder="ex. This board is super dope!"></textarea>
                    </div>

                    <SelectState/>

                    <label htmlFor="location-zip">Zip Code:</label>
                    <div id="location-zip">
                        <input type="text" id="location-zip-input" placeholder="ex: 49125"/>
                    </div>

                    <BoardType/>

                    <BoardCondition/>

                    <label htmlFor="image">Image:</label>
                    <div id="image">
                        <input type="file" />
                    </div>

                    <label htmlFor="email">Your Email:</label>
                    <div id="email">
                        <input type="email" placeholder="bigwavedave@pitted.win" />
                        <input type="email" placeholder="Confirm Email" />
                    </div>

                    <p><button className="button">Let's Sell This Thing!</button></p>
                </form>
            </div>
            <Aside />
        </div>
	);
};