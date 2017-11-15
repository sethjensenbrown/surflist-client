import React from 'react';
import {shallow} from 'enzyme';

import NewBoard from './new-board';

describe('<NewBoard />', () => {
    it('Renders without crashing', () => {
        shallow(<NewBoard />);
    });
});