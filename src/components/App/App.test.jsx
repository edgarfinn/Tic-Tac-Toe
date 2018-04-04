/* eslint-env jest */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<App />);
  return { wrapper };
};

describe('App', () => {
  const { wrapper } = setup();
  it('renders as expected', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
