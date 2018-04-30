import React from 'react'
import PT from 'prop-types'

$.propTypes = {
	all:PT.arrayOf(PT.string).isRequired,
	visible:PT.arrayOf(PT.string),
	sequence:PT.arrayOf(PT.string),
	isActiveCol:PT.string,
}
$.displayName = 'ColumnsConfig'
export default function $({all, sequence, visible, isActive, gofer}) {
	visible = visible || all
	return 0||
<form className="datatable-columns-config">
	<button className="activate" type="button" onClick={() => gofer.activate(!isActive)}>
		<i className="fa fa-cog" aria-hidden="true"/>
	</button>
	{ isActive ?
		<fieldset className="options">
			{all.slice().sort().map(col => {
				var className = 'visibility ' + (visible.indexOf(col) > -1 ? 'off' : 'on')
				return 0||
		<div className="col-options" key={col}>
			<button className={className} type="button" onClick={e => gofer.showCol(!(visible.indexOf(col) > -1), col, e)}>
				{(visible.indexOf(col) > -1 ? '✔':'✖') + '\u00a0' +  col}
			</button>
			<input className="col-order" type="range" min={0} max={sequence.length-1} step="1" value={sequence.indexOf(col)} onChange={e => gofer.changeSequence(sequence.indexOf(col), +e.target.value)}/>
		</div>
			})}
		</fieldset>
		: null}
</form>
}
