import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import { expect } from 'chai'

import Head from '../src/view/Head'
import HeadRow from '../src/view/HeadRow'
import Row from '../src/view/Row'

const cols = [1]

describe('<Head/>', () => {
	it('supports className prop', () => {
		const wrapper = shallow(<Head className='test' />)
		expect(wrapper.hasClass('test')).to.be.true
	})

	it('renders headrow by cols', () => {
		const wrapper = shallow(<Head {...{cols}}/>)
		expect(wrapper.contains(<HeadRow {...{cols}}/>)).to.be.true
	})

	it('renders row with individual cols data', () => {
		const wrapper = shallow(<Head {...{cols}}><HeadRow cols={['a']} /></Head>)
		expect(wrapper.contains(<HeadRow {...{cols:['a']}}/>)).to.be.true
	})

	it('supports HeadRow and Row children', () => {
		const wrapper = shallow(<Head {...{cols}}><HeadRow/><Row/></Head>)
		expect(wrapper.contains([<HeadRow {...{cols}}/>, <Row {...{cols}}/>])).to.be.true
	})
})
