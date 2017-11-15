import React from 'react';
import {shallow} from 'enzyme';

import BoardSearch from './board-search';

describe('<BoardSearch />', () => {
    it('Renders without crashing', () => {
        shallow(<BoardSearch />);
    });
});