import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { expect } from 'chai'

import Cell from '../src/view/Cell'

describe('<Cell/>', () => {
	it('support className', () => {
		const wrapper = shallow(<Cell className="foo" />)
		expect(wrapper.hasClass('foo')).to.be.true
	})
	it('support individual children', () => {
		const wrapper = shallow(<Cell><span/></Cell>)
		expect(wrapper.contains(<span/>)).to.be.true
	})
	it('shows json for data of type object as default', () => {
		const wrapper = shallow(<Cell data={{foo:'bar'}}/>)
		expect(wrapper.contains('{"foo":"bar"}')).to.be.true
	})
	it('shows empty for undefined', () => {
		const wrapper = shallow(<Cell data={undefined}/>)
		expect(wrapper.contains(<td></td>)).to.be.true
	})
})
