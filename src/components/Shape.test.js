import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders Shape', () => {
    const wrapper = shallow(<Shape text='' color='#FFFFFF' backgroundColor='#000000' />);
    expect(wrapper).toMatchSnapshot();
  });
});
