import React from 'react';
import {shallow} from 'enzyme';

import RefineSearchForm from './refine-search-form';

describe('<RefineSearchForm />', () => {
    it('Renders without crashing', () => {
        shallow(<RefineSearchForm />);
    });
});