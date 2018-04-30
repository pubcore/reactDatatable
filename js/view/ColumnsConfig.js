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

$.propTypes = {
	all: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
	visible: _propTypes2.default.arrayOf(_propTypes2.default.string),
	sequence: _propTypes2.default.arrayOf(_propTypes2.default.string),
	isActiveCol: _propTypes2.default.string
};
$.displayName = 'ColumnsConfig';
function $(_ref) {
	var all = _ref.all,
	    sequence = _ref.sequence,
	    visible = _ref.visible,
	    isActive = _ref.isActive,
	    gofer = _ref.gofer;

	visible = visible || all;
	return 0 || _react2.default.createElement(
		'form',
		{ className: 'datatable-columns-config' },
		_react2.default.createElement(
			'button',
			{ className: 'activate', type: 'button', onClick: function onClick() {
					return gofer.activate(!isActive);
				} },
			_react2.default.createElement('i', { className: 'fa fa-cog', 'aria-hidden': 'true' })
		),
		isActive ? _react2.default.createElement(
			'fieldset',
			{ className: 'options' },
			all.slice().sort().map(function (col) {
				var className = 'visibility ' + (visible.indexOf(col) > -1 ? 'off' : 'on');
				return 0 || _react2.default.createElement(
					'div',
					{ className: 'col-options', key: col },
					_react2.default.createElement(
						'button',
						{ className: className, type: 'button', onClick: function onClick(e) {
								return gofer.showCol(!(visible.indexOf(col) > -1), col, e);
							} },
						(visible.indexOf(col) > -1 ? '✔' : '✖') + '\xA0' + col
					),
					_react2.default.createElement('input', { className: 'col-order', type: 'range', min: 0, max: sequence.length - 1, step: '1', value: sequence.indexOf(col), onChange: function onChange(e) {
							return gofer.changeSequence(sequence.indexOf(col), +e.target.value);
						} })
				);
			})
		) : null
	);
}