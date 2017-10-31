import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
	return (
		<header className="row">
        	<div className="large-3 columns">
            	<div className="logo-container">
            		<Link to="/" className="logo">
                		<div>
                    		<h1>surflist.</h1>
                    		<h5>buy + sell surfboards</h5>
                  		</div>
                	</Link>
              	</div>
              	<hr />
            </div>
            <nav className="large-9 columns">
                <div className="button-group float-right">
                    <Link className="button" to="/new-board">Sell Your Board</Link>
                    <Link className="button" to="/board-search">Find Your Next Board</Link>
                </div>
            </nav>
        </header>
	);
};