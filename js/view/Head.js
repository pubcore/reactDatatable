'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Head;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeadRow = require('./HeadRow');

var _HeadRow2 = _interopRequireDefault(_HeadRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Head(_ref) {
	var cols = _ref.cols,
	    rows = _ref.rows,
	    children = _ref.children,
	    rest = _objectWithoutProperties(_ref, ['cols', 'rows', 'children']);

	var childs = [];

	if (_react2.default.Children.count(children)) {
		_react2.default.Children.forEach(children, function (child, i) {
			childs.push(_react2.default.cloneElement(child, {
				cols: child.props.cols || cols,
				rows: rows,
				key: i
			}));
		});
	}

	return 0 || _react2.default.createElement(
		'thead',
		rest,
		childs.length && childs || cols && _react2.default.createElement(_HeadRow2.default, { cols: cols, rows: rows })
	);
}