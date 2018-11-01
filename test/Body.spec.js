import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { expect } from 'chai'

import Body from '../src/view/Body'
import Row from '../src/view/Row'
import Head from '../src/view/Head'
import HeadRow from '../src/view/HeadRow'

const rows = [['11', '12'], ['21', '22']]
const cols = [1]

describe('<Body />', () => {
	it('support className property', () => {
		const wrapper = shallow(<Body className="foo" />)
		expect(wrapper.hasClass('foo')).to.equal(true)
	})
	it('can render Rows (array of array)', () => {
		const wrapper = shallow(<Body {...{rows}}/>)
		expect(wrapper.find(Row)).to.have.length(2)
		expect(wrapper.containsMatchingElement([Head, HeadRow])).to.be.false
	})
	it('can render Rows (array of object)', () => {
		const wrapper = shallow(<Body {...{rows:[{a:1}, {a:2}]}}/>)
		expect(wrapper.find(Row)).to.have.length(2)
		expect(wrapper.containsMatchingElement([Head, HeadRow])).to.be.false
	})
	it('supports Row children', () => {
		const wrapper = shallow(<Body {...{rows, cols}}><Row className="test"/></Body>)
		expect(wrapper.find({row:rows[1], cols, className:'test'})).to.have.length(1)
	})
})
