import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { expect } from 'chai'

import Datatable from '../src/view/Datatable'
import Body from '../src/view/Body'
import Head from '../src/view/Head'

describe('<Datatable />', () => {
	it('has a default className', () => {
		const wrapper = shallow(<Datatable/>)
		expect(wrapper.hasClass('datatable')).to.equal(true)
	})
	it('support className property', () => {
		const wrapper = shallow(<Datatable className='foo' />)
		expect(wrapper.hasClass('foo')).to.equal(true)
	})
	it('render Body by given rows data', () => {
		const wrapper = shallow(<Datatable {...{rows:[{a:'11', b:'12'},{a:'21', b:'22'}]}}/>)
		expect(wrapper.find(Body)).to.have.length(1)
	})
	it('render Head and Body children', () => {
		const wrapper = shallow(<Datatable><Head/><Body/><span/></Datatable>)
		expect(wrapper.contains(<span/>)).to.be.false
		expect(wrapper.contains(<Head/>)).to.be.true
		expect(wrapper.contains(<Body/>)).to.be.true
	})
})
