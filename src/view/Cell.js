import React from 'react'
import PT from 'prop-types'

$.displayName = 'Cell'
$.propTypes = {
	data:PT.oneOfType([PT.string, PT.number, PT.bool, PT.object]),
	isHead:PT.bool
}

export default function $({isHead, data, children, ...rest}){
	return (
		isHead ?
			<th {...rest}>{children || data}</th>
			:
			<td {...rest}>{children || data}</td>
	)
}
