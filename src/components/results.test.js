import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Results from './results';

let response = {
	ok: true,
	json: () => [{
				"title": "Funny Shaped Board",
				"price": 230,
				"description": "fun, good condition. Just has a funny shape.",
				"state": "CA",
				"zip": 91210,
				"board-type": "shortboard",
				"board-condition": "decent",
				"email": "surflist.info@gmail.com",
				"image": "https://res.cloudinary.com/sethjensenbrown/image/upload/v1510220144/kukqbkunx8jmby09rb1e.jpg",
				"location": {
					"type": "Point",
					"coordinates": [-118.2563169, 34.144801]
				}
			}]
}
const promise = Promise.resolve(response);
sinon.stub(global, 'fetch').callsFake(() => promise);

describe('<Results />', () => {
    it('Renders without crashing', () => {
  		shallow(<Results />);
    });
});