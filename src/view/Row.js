import React from 'react'
import Cell from './Cell'
import PT from 'prop-types'

Row.propTypes = {
	row:PT.oneOfType([PT.object, PT.array]),
	children:PT.oneOfType([PT.func, PT.node]),
	cols:PT.arrayOf(PT.oneOfType([PT.string, PT.number])),
	isHead:PT.bool,//will render "th" elements, instead of "td",
	index:PT.number,
}
export default function Row({row, children, cols, index, isHead, ...rest}){
	var cellMap
	if(typeof children === 'function'){
		cellMap = children
	}

	return 0||
<tr {...rest}>
	{(cols ? cols : Object.keys(row||{})).map(col =>
		cellMap ? cellMap({col, row, isHead, index})
			: <Cell {...{data:row !== undefined ? row[col] : col, isHead, key:col}}/>
	)}
</tr>
}
