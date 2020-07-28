import React from 'react'
import HeadRow from './HeadRow'
/* eslint react/prop-types: 0 */
export default function Head({cols, rows, children, ...rest}){
	var childs = []

	if(React.Children.count(children)){
		React.Children.forEach(children, (child, i) => {
			childs.push(React.cloneElement(child, {
				cols:child.props.cols || cols, 
				rows,
				key:i
			}))
		})
	}

	return 0||
<thead {...rest}>
	{childs.length && childs || cols && <HeadRow {...{cols, rows}}/>}
</thead>
}
