import React from 'react';

export default function PriceRange() {
	return (
		<div className="price-range">
			<label htmlFor="price">Price:</label>
            <div id="price">
                <input type="text" id="price-min" name="price" placeholder="minimum"/>
                <input type="text" id="price-max" name="price" placeholder="maximum"/>
            </div>
		</div>
	);
};