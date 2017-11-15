import React from 'react';
import {shallow} from 'enzyme';

import NewBoardForm from './new-board-form';

describe('<NewBoardForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NewBoardForm />);
    });
});