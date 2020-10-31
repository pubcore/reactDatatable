import React, {Children, cloneElement} from 'react'
import Body from './Body'
import Row from './Row'
import Head from './Head'
import HeadRow from './HeadRow'
import Cell from './Cell'
import PT from 'prop-types'
import Rowcount from './Rowcount'
import ColumnsConfig from './ColumnsConfig'

Datatable.propTypes = {
	rows:PT.arrayOf(PT.object),
	cols:PT.arrayOf(PT.oneOfType([PT.string, PT.number])),
	children:PT.node
}
Datatable.renderChildren = () => {}
export default function Datatable({children, rows, cols, ...rest}){
	var custom = {}

	Children.forEach(children, child => {
		custom[[Head, Body].indexOf(child.type)] = cloneElement(child, {rows, cols})
	})

	return <table className='datatable' {...rest}>
		{custom[0] || cols && <Head {...{rows, cols}}/>}
		{custom[1] || rows && <Body {...{rows, cols}}/>}
	</table>
}

export {Body, Row, Head, HeadRow, Cell, Rowcount, ColumnsConfig}
