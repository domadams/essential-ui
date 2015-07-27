/*******************************************************
 * Button Component
 * A generic button component that takes three properties
 * - type - if the button is primary or secondary
 * - size - the size class to apply to the button
 * - text - the text to show in the button
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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var BUTTON_SIZES = ['lg', 'md', 'sm'];
var BUTTON_TYPES = ['primary', 'secondary'];

var styles = {
    base: {
        border: 1,
        borderRadius: 50,
        cursor: 'pointer',
        lineHeight: 1,
        textAlign: 'center',
        textDecoration: 'none',
        WebkitTransition: 'background 0.2s ease-out,color 0.2s ease-out,border-color 0.2s ease-out'
    },

    primary: {
        background: '#00539F',
        borderColor: 'transparent',
        color: '#FFF'
    },

    secondary: {
        background: '#FFF',
        borderColor: '#00539F',
        color: '#00539F'
    },

    lg: {
        fontSize: '2rem',
        padding: '14px 50px'
    },

    md: {
        fontSize: '1.2rem',
        padding: '8px 30px'
    },

    sm: {
        fontSize: '0.9rem',
        padding: '4px 30px'
    }
};

var Button = (function (_Component) {
    _inherits(Button, _Component);

    _createClass(Button, null, [{
        key: 'displayName',
        value: 'Button',
        enumerable: true
    }, {
        key: 'propTypes',
        value: {
            size: _react.PropTypes.oneOf(BUTTON_SIZES),
            text: _react.PropTypes.string,
            type: _react.PropTypes.oneOf(BUTTON_TYPES)
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            size: 'md',
            type: 'primary'
        },
        enumerable: true
    }]);

    function Button(props) {
        _classCallCheck(this, Button);

        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var type = this.props.type;
            var size = this.props.size;
            var text = this.props.text;

            var style = _lodash2['default'].extend({}, styles.base, styles[type], styles[size]);

            return _react2['default'].createElement(
                'button',
                { style: style, title: text, type: 'submit' },
                text
            );
        }
    }]);

    return Button;
})(_react.Component);

exports['default'] = Button;
module.exports = exports['default'];