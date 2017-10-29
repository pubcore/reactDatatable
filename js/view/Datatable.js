'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ColumnsConfig = exports.Rowcount = exports.Cell = exports.HeadRow = exports.Head = exports.Row = exports.Body = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = $;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

var _HeadRow = require('./HeadRow');

var _HeadRow2 = _interopRequireDefault(_HeadRow);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Rowcount = require('./Rowcount');

var _Rowcount2 = _interopRequireDefault(_Rowcount);

var _ColumnsConfig = require('./ColumnsConfig');

var _ColumnsConfig2 = _interopRequireDefault(_ColumnsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

$.propTypes = {
	rows: _propTypes2.default.arrayOf(_propTypes2.default.object),
	cols: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType(_propTypes2.default.string, _propTypes2.default.number))
};
$.displayName = 'Datatable';
$.renderChildren = function () {};
function $(_ref) {
	var children = _ref.children,
	    rows = _ref.rows,
	    cols = _ref.cols,
	    rest = _objectWithoutProperties(_ref, ['children', 'rows', 'cols']);

	var childs = {};

	return 0 || _react2.default.createElement(
		'table',
		_extends({ className: 'datatable' }, rest),
		_react2.default.Children.forEach(children, function (child) {
			return childs[child.type.name] = child;
		}),
		childs['Head'] && _react2.default.cloneElement(childs['Head'], { rows: rows, cols: cols }) || cols && _react2.default.createElement(_Head2.default, { rows: rows, cols: cols }),
		childs['Body'] && _react2.default.cloneElement(childs['Body'], { rows: rows, cols: cols }) || rows && _react2.default.createElement(_Body2.default, { rows: rows, cols: cols })
	);
}

exports.Body = _Body2.default;
exports.Row = _Row2.default;
exports.Head = _Head2.default;
exports.HeadRow = _HeadRow2.default;
exports.Cell = _Cell2.default;
exports.Rowcount = _Rowcount2.default;
exports.ColumnsConfig = _ColumnsConfig2.default;