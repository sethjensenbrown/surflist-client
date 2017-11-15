import React from 'react';
import {shallow} from 'enzyme';

import Aside from './aside';

describe('<Aside />', () => {
    it('Renders without crashing', () => {
        shallow(<Aside />);
    });
});