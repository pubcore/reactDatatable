import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
Enzyme.configure({ adapter: new Adapter() })
import {expect} from 'chai'

import HeadRow from '../src/view/HeadRow'
import Cell from '../src/view/Cell'

describe('<HeadRow />', () => {
	it('render head colums', () => {
		const wrapper = shallow(<HeadRow {...{row:{a:1}}}/>)
		expect(wrapper.find({isHead:true})).to.have.length(1)
	})
	it('render head colums by cols', () => {
		const wrapper = shallow(<HeadRow {...{cols:[1]}}/>)
		expect(wrapper.find({isHead:true})).to.have.length(1)
	})
	it('it support function as child', () => {
		const wrapper = shallow(<HeadRow cols={[1]}>{() => <Cell/>}</HeadRow>)
		expect(wrapper.contains(<Cell/>)).to.be.true
	})
})
