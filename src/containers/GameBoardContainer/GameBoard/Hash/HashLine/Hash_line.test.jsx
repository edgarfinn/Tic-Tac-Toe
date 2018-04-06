/* eslint-env jest */
import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import HashLine from './Hash_line';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props) => {
  const wrapper = mount(<HashLine {...props} />);
  return { props, wrapper };
};

describe('<HashLine position="top" />', () => {
  const properties = { linePosition: 'top' };
  const { wrapper } = setup(properties);

  it('renders correctly position: top', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('top', 'calc(33.33% - 2px)');
  });
});

describe('<HashLine position="left" />', () => {
  const properties = { linePosition: 'left' };
  const { wrapper } = setup(properties);

  it('renders correctly position: left', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('left', 'calc(33.33% - 2px)');
  });
});

describe('<HashLine position="right" />', () => {
  const properties = { linePosition: 'right' };
  const { wrapper } = setup(properties);

  it('renders correctly position: right', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule('left', 'calc(66.66% - 2px)');
  });
});

describe('<HashLine position="bottom" />', () => {
  const properties = { linePosition: 'bottom' };
  const { wrapper } = setup(properties);

  it('renders correctly position: bottom', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
