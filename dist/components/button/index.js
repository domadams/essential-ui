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

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var BUTTON_SIZES = ['lg', 'md', 'sm'];
var BUTTON_TYPES = ['primary', 'secondary'];
var colors = {
    white: '#FFF',
    blue: '#00539f',
    brightBlue: '#009cda'
};

var styles = {
    base: {
        border: '1px solid',
        borderRadius: 6,
        cursor: 'pointer',
        lineHeight: 1,
        textAlign: 'center',
        textDecoration: 'none',
        WebkitTransition: 'background 0.2s ease-out,color 0.2s ease-out,border-color 0.2s ease-out'
    },

    primary: {
        background: colors.blue,
        borderColor: 'transparent',
        color: colors.white,
        hovered: {
            background: colors.brightBlue
        }
    },

    secondary: {
        background: colors.white,
        borderColor: colors.blue,
        color: colors.blue,
        hovered: {
            borderColor: colors.brightBlue,
            color: colors.brightBlue
        }
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
            buttonType: _react.PropTypes.oneOf(BUTTON_TYPES),
            href: _react2['default'].PropTypes.string,
            size: _react.PropTypes.oneOf(BUTTON_SIZES),
            text: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            buttonType: 'primary',
            size: 'md'
        },
        enumerable: true
    }]);

    function Button(props) {
        _classCallCheck(this, Button);

        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
        this.toggleHover = this.toggleHover.bind(this);
        this.state = {
            hovered: false
        };
    }

    _createClass(Button, [{
        key: 'toggleHover',
        value: function toggleHover() {
            this.setState({ hovered: !this.state.hovered });
        }
    }, {
        key: 'render',
        value: function render() {
            var buttonType = this.props.buttonType;
            var size = this.props.size;
            var text = this.props.text;
            var href = this.props.href;

            var style = _Object$assign({}, styles.base, styles[buttonType], styles[size]);
            if (this.state.hovered) {
                style = _Object$assign({}, styles.base, styles[buttonType], styles[size], styles[buttonType].hovered);
            }

            var props = _Object$assign({}, { style: style, onMouseEnter: this.toggleHover, onMouseLeave: this.toggleHover, type: 'submit', href: { href: href } }, this.props);

            var tag = 'button';
            if (href) {
                tag = 'a';
                delete props.type;
            } else {
                delete props.href;
            }

            return _react2['default'].createElement(tag, props, text);
        }
    }]);

    return Button;
})(_react.Component);

exports['default'] = Button;
module.exports = exports['default'];