import React from 'react';
import {shallow} from 'enzyme';

import BoardCard from './board-card';

let testBoard = {
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
			};

describe('<BoardCard />', () => {
    it('Renders without crashing', () => {
        shallow(<BoardCard board={testBoard}/>);
    });

    it('Renders the board', () => {
        const wrapper = shallow(<BoardCard board={testBoard}/>);
        expect(wrapper.contains(<h4>{testBoard.title} (${testBoard.price})</h4>)).toEqual(true);
        expect(wrapper.contains(<img alt="(the board for sale)" className="post-img" src={testBoard.image} />)).toEqual(true);
        expect(wrapper.contains(<p><strong>Price:</strong> ${testBoard.price}</p>)).toEqual(true);
        expect(wrapper.contains(<p><strong>Location:</strong> {testBoard.state}</p>)).toEqual(true);
        expect(wrapper.contains(<p><strong>Type:</strong> {testBoard['board-type']}</p>)).toEqual(true);
        expect(wrapper.contains(<p><strong>Condition:</strong> {testBoard['board-condition']}</p>)).toEqual(true);
        expect(wrapper.contains(<p><strong>Description:</strong> {testBoard.description}</p>)).toEqual(true);
    });
});