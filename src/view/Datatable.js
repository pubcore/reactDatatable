import React from 'react'
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
	var childs = {}

	return 0||
<table className='datatable' {...rest}>
	{React.Children.forEach(children, child => childs[child.type.name] = child)}
	{childs['Head'] && React.cloneElement(childs['Head'], {rows, cols})
		|| cols && <Head {...{rows, cols}}/>}
	{childs['Body'] && React.cloneElement(childs['Body'], {rows, cols})
		|| rows && <Body {...{rows, cols}}/>}
</table>
}

export {Body, Row, Head, HeadRow, Cell, Rowcount, ColumnsConfig}
