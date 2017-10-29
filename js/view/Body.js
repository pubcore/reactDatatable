'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Body;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Body(_ref) {
	var rows = _ref.rows,
	    cols = _ref.cols,
	    children = _ref.children,
	    rest = _objectWithoutProperties(_ref, ['rows', 'cols', 'children']);

	return 0 || _react2.default.createElement(
		'tbody',
		rest,
		rows && rows.map(function (row, index) {
			return _react2.default.Children.count(children) ? _react2.default.Children.map(children, function (child) {
				return child.type === _Row2.default && _react2.default.cloneElement(child, { row: row, cols: cols, key: index, index: index });
			}) : _react2.default.createElement(_Row2.default, { row: row, key: index, index: index, cols: cols });
		})
	);
}