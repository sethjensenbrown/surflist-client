import React from 'react';

export default function SearchByZip() {
	return (
		<div className="search-by-zip">
			<label htmlFor="location-zip">Search by Zip Code:</label>
	        <div id="location-zip">
	            <input type="text" id="location-zip-input" placeholder="ex: 49125"/>
	            <select defaultValue="0" id="location-radius" name="location-zip">
	                <option value="0" disabled>Select search radius</option>
	                <option value="15">15 miles</option>
	                <option value="25">25 miles</option>
	                <option value="50">50 miles</option>
	                <option value="100">100 miles</option>
	                <option value="250">250 miles</option>
	            </select>
	        </div>
	    </div>
	);
};