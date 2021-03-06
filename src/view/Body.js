import React, {Children, cloneElement} from 'react'
import Row from './Row'

//all props are passed through form upper compnent, no need to type-check again
/* eslint react/prop-types: 0 */
export default function Body({rows, cols, children, ...rest}){
	return <tbody {...rest}>
		{rows && rows.map((row, index) => Children.count(children) ?
			Children.map(children, child =>
				child.type === Row && cloneElement(child, {row, cols, key:index, index})
			)
			: <Row {...{row, key:index, index, cols}}/>
		)}
	</tbody>
}
