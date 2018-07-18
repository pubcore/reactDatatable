import React from 'react'
import PT from 'prop-types'

$.displayName = 'Cell'
$.propTypes = {
	data:PT.oneOfType([PT.string, PT.number, PT.bool, PT.object]),
	isHead:PT.bool
}
function show(d){
	return typeof d === 'object' ? JSON.stringify(d) : d
}
export default function $({isHead, data, children, ...rest}){
	return (
		isHead ?
			<th {...rest}>{children || show(data)}</th>
			:
			<td {...rest}>{children || show(data)}</td>
	)
}
