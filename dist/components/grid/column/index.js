/*******************************************************
 * Column Component
 * A generic Column component that takes number of columns
 * to span
 ******************************************************/
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var COLUMN_SIZES = ['8of8', '7of8', '6of8', '5of8', '4of8', '3of8', '2of8', '1of8'];

var styles = {
    col: {
        display: 'block',
        float: 'left',
        margin: '1% 0 1% 0'
    },

    span: {
        "8of8": {
            width: '100%'
        },
        "7of8": {
            width: '87.3%'
        },
        "6of8": {
            width: '74.6%'
        },
        "5of8": {
            width: '61.9%'
        },
        "4of8": {
            width: '49.2%'
        },
        "3of8": {
            width: '36.5%'
        },
        "2of8": {
            width: '23.8%'
        },
        "1of8": {
            width: '11.1%'
        }
    }
};

var Column = (function (_Component) {
    _inherits(Column, _Component);

    _createClass(Column, null, [{
        key: 'displayName',
        value: 'Column',
        enumerable: true
    }, {
        key: 'propTypes',
        value: {
            children: _react.PropTypes.node.isRequired,
            span: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            span: '8of8'
        },
        enumerable: true
    }]);

    function Column(props) {
        _classCallCheck(this, Column);

        _get(Object.getPrototypeOf(Column.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Column, [{
        key: 'render',
        value: function render() {
            var span = this.props.span;

            var colStyle = _Object$assign({}, styles.col, styles.span[span]);

            return _react2['default'].createElement('div', _extends({ style: colStyle }, this.props));
        }
    }]);

    return Column;
})(_react.Component);

exports['default'] = Column;
module.exports = exports['default'];