import React from 'react';
import {shallow} from 'enzyme';

import SearchForm from './search-form';

describe('<SearchForm />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchForm />);
    });
});