import PT from 'prop-types'
const uiText = (T, key, def, replacements={}) =>
	(T && T[key] || def).replace(
		/\{(\w+)\}/g,
		(m, tag) => tag in replacements ? replacements[tag] : m
	)


Rowcount.propTypes = {
	rowCount:PT.number.isRequired,
	total:PT.number.isRequired,
	offset:PT.number.isRequired,
	T:PT.object.isRequired
}
export default function Rowcount({rowCount, total, offset, T}) { return 0||
	rowCount ?
	uiText(T, 'number_of_entries', 'Showing {first} to {last} of {num} entries', {
		first: offset + 1,
		last: offset + rowCount,
		num: total > rowCount ? total : rowCount
	})
	:
	uiText(T, 'no_entries', 'Not entries found')
}
