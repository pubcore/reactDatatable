import PT from 'prop-types'
import uiText from '@pubcore/ui-text'

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
	}, T.__config)
	:
	uiText(T, 'no_entries', 'Not entries found', null, T.__config)
}
