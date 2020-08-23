import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { expect } from 'chai'

import Rowcount from '../src/view/Rowcount'

describe('<Rowcount />', () => {
	it('shows quantities', () => {
		const wrapper = shallow(<Rowcount {...{rowCount:2, total:5, offset:0, T:{}}}/>)
		expect(wrapper.contains('Showing 1 to 2 of 5 entries')).to.be.true
	})
	it('shows no entries', () => {
		const wrapper = shallow(<Rowcount {...{rowCount:0, total:0, offset:0, T:{no_entries:'Nothing'}}}/>)
		expect(wrapper.contains('Nothing')).to.be.true
	})
	it('wrong replacement tags stay', () => {
		const wrapper = shallow(<Rowcount {...{rowCount:2, total:5, offset:0, T:{number_of_entries:'Showing {one} entries'}}}/>)
		expect(wrapper.contains('Showing {one} entries')).to.be.true
	})
	it('shows quantities', () => {
		const wrapper = shallow(<Rowcount {...{rowCount:2, total:1, offset:0, T:{}}}/>)
		expect(wrapper.contains('Showing 1 to 2 of 2 entries')).to.be.true
	})
})