import React from 'react';
import Home from '../Home';

describe('the `Home` component', () => {
    it('should render without blowing up', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).to.exist;
    })
})