import React from 'react';
import { mount } from 'enzyme';

import Footer from './Footer';

describe('Footer component', () => {
    it('should match snapshot', () => {
        expect(mount(<Footer />)).toMatchSnapshot();
    });
});
