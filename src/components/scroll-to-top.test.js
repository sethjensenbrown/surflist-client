import React from 'react';
import {shallow} from 'enzyme';

import ScrollToTop from './scroll-to-top';

describe('<ScrollToTop />', () => {
    it('Renders without crashing', () => {
        shallow(<ScrollToTop />);
    });
});