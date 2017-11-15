import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import Board from './board';
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);


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

describe('<Board />', () => {
    it('Renders without crashing', () => {
  		const wrapper = mount(<Board />);
    });

    it('Renders the Make Offer button initially', () => {
    	const wrapper = mount(<Board />);
    	expect(wrapper.state('offering')).toEqual(false);
	});

	// it('Should switch to offering when the Make Offer button is clicked', () => {
	//     const wrapper = mount(<Board />);
	//     wrapper.simulate('click');
	//     wrapper.update();
	//     expect(wrapper.state('offering')).toEqual(true);
	// });

    // it('Populates State with fetch results', async () => {
  		// const wrapper = mount(<Board />);
  		// expect(wrapper.state('results')).toEqual('Loading, please wait...');
  		// await expect(wrapper.instance().handleUpload()).to.be.fulfilled;
  		// expect(wrapper.state('results')).toEqual(response.json());
    // });
});