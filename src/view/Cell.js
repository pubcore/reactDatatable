import React from 'react'
import PT from 'prop-types'

Cell.propTypes = {
	data:PT.oneOfType([PT.string, PT.number, PT.bool, PT.object, PT.array]),
	isHead:PT.bool,
	children:PT.node
}
function show(d){
	return typeof d === 'object' ? JSON.stringify(d) : d
}
export default function Cell({isHead, data, children, ...rest}){
	return (
		isHead ?
			<th {...rest}>{children || show(data)}</th>
			:
			<td {...rest}>{children || show(data)}</td>
	)
}
