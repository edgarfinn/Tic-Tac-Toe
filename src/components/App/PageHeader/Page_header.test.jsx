/* eslint-env jest */
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import PageHeader from './Page_header'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const wrapper = shallow(<PageHeader />)
  return { wrapper }
}

describe('<PageHeader />', () => {
  const { wrapper } = setup()
  it('renders as expected', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
