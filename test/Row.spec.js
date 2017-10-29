import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { expect } from 'chai'

import Row from '../src/view/Row'
import Cell from '../src/view/Cell'

const row = {a:'1', b:'2'}

describe('<Row />', () => {
	it('support className', () => {
		const wrapper = shallow(<Row className="foo" />)
		expect(wrapper.hasClass('foo')).to.be.true
	})
	it('support child function', () => {
		const wrapper = shallow(<Row {...{row}}>{({col}) => <span>{col}</span>}</Row>)
		expect(wrapper.contains(<span>a</span>)).to.be.true
	})
	it('renders cells by given row data', () => {
		const wrapper = shallow(<Row {...{row}} />)
		expect(wrapper.find(Cell)).to.have.length(2)
	})
	it('render cells with row data in order of cols', () => {
		const wrapper = shallow(<Row {...{row, cols:['b']}} />)
		expect(wrapper.find(Cell)).to.have.length(1)
		expect(wrapper.find({ data: '2' })).to.have.length(1)
	})
	it('render col-value if row is not present', () => {
		const wrapper = shallow(<Row {...{cols:['b']}} />)
		expect(wrapper.contains(<Cell data="b"/>)).to.be.true
	})
})
