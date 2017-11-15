import React from 'react';
import {shallow} from 'enzyme';

import OfferForm from './offer-form';

describe('<OfferForm />', () => {
    it('Renders without crashing', () => {
        shallow(<OfferForm />);
    });
});