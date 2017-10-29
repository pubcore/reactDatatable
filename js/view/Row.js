'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = $;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

$.propTypes = {
	row: _propTypes2.default.object,
	cols: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])),
	isHead: _propTypes2.default.bool //will render "th" elements, instead of "td"
};
$.displayName = 'Row';
function $(_ref) {
	var row = _ref.row,
	    children = _ref.children,
	    cols = _ref.cols,
	    index = _ref.index,
	    isHead = _ref.isHead,
	    rest = _objectWithoutProperties(_ref, ['row', 'children', 'cols', 'index', 'isHead']);

	var cellMap;
	if (typeof children === 'function') {
		cellMap = children;
	}

	return 0 || _react2.default.createElement(
		'tr',
		rest,
		(cols ? cols : Object.keys(row || {})).map(function (col) {
			return cellMap ? cellMap({ col: col, row: row, isHead: isHead, index: index }) : _react2.default.createElement(_Cell2.default, { data: row !== undefined ? row[col] : col, isHead: isHead, key: col });
		})
	);
}