import React from 'react'
import Row from './Row'

export default function Body({rows, cols, children, ...rest}){
	return 0||
<tbody {...rest}>
	{rows && rows.map((row, index) => React.Children.count(children) ?
		React.Children.map(children, child =>
			child.type === Row && React.cloneElement(child, {row, cols, key:index, index})
		)
		:
		<Row {...{row, key:index, index, cols}}/>
	)}
</tbody>
}
