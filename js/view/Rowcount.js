'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = $;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pubcoreUiText = require('pubcore-ui-text');

var _pubcoreUiText2 = _interopRequireDefault(_pubcoreUiText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$.propTypes = {
	rowCount: _propTypes2.default.number.isRequired,
	total: _propTypes2.default.number.isRequired,
	offset: _propTypes2.default.number.isRequired,
	T: _propTypes2.default.object.isRequired
};
$.displayName = 'Rowcount';
function $(_ref) {
	var rowCount = _ref.rowCount,
	    total = _ref.total,
	    offset = _ref.offset,
	    T = _ref.T;
	return 0 || rowCount ? (0, _pubcoreUiText2.default)(T, 'number_of_entries', 'Showing {first} to {last} of {num} entries', {
		first: offset + 1,
		last: offset + rowCount,
		num: total > rowCount ? total : rowCount
	}) : (0, _pubcoreUiText2.default)(T, 'no_entries', 'Not entries found');
}