/*******************************************************
 * Label Component
 * A generic label component that takes two properties
 * - labelFor - identify what input field the label relates to
 * - labelText - the text to display in the label
 ******************************************************/
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Label = (function (_Component) {
    _inherits(Label, _Component);

    _createClass(Label, null, [{
        key: 'displayName',
        value: 'Label',
        enumerable: true
    }, {
        key: 'propTypes',
        value: {
            labelFor: _react2['default'].PropTypes.string,
            labelText: _react2['default'].PropTypes.string
        },
        enumerable: true
    }]);

    function Label(props) {
        _classCallCheck(this, Label);

        _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Label, [{
        key: 'render',
        value: function render() {
            var labelFor = this.props.labelFor;
            var labelText = this.props.labelText;

            return _react2['default'].createElement(
                'label',
                { htmlFor: labelFor },
                labelText
            );
        }
    }]);

    return Label;
})(_react.Component);

exports['default'] = Label;
module.exports = exports['default'];