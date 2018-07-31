/* eslint-env jest */

import React from 'react'
import 'jest-styled-components'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Hash from './Hash'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const wrapper = shallow(<Hash />)
  return { wrapper }
}

describe('<Hash />', () => {
  const { wrapper } = setup()
  it('renders correctly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
