'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = $;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

$.displayName = 'Cell';
$.propTypes = {
	data: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool, _propTypes2.default.object]),
	isHead: _propTypes2.default.bool
};

function $(_ref) {
	var isHead = _ref.isHead,
	    data = _ref.data,
	    children = _ref.children,
	    rest = _objectWithoutProperties(_ref, ['isHead', 'data', 'children']);

	return isHead ? _react2.default.createElement(
		'th',
		rest,
		children || data
	) : _react2.default.createElement(
		'td',
		rest,
		children || data
	);
}