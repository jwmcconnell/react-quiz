import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('ColorSelector component', () => {
  it('renders ColorSelector', () => {
    const wrapper = shallow(<ColorSelector color='#FFF' backgroundColor="#000" onChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
