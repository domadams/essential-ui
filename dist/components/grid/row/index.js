/*******************************************************
 * Row Component
 * A generic Row component that takes child nodes
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

var styles = {
    row: {
        margin: '0 -1.5em'
    },

    rowBefore: {
        display: 'table'
    },

    rowAfter: {
        clear: 'both'
    }
};

var Row = (function (_Component) {
    _inherits(Row, _Component);

    _createClass(Row, null, [{
        key: 'displayName',
        value: 'Row',
        enumerable: true
    }, {
        key: 'propTypes',
        value: {
            children: _react.PropTypes.node.isRequired
        },
        enumerable: true
    }]);

    function Row(props) {
        _classCallCheck(this, Row);

        _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).call(this, props);
    }

    _createClass(Row, [{
        key: 'render',
        value: function render() {
            var rowAfter = _Object$assign({}, styles.rowBefore, styles.rowAfter);

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement('div', { style: styles.rowBefore }),
                _react2['default'].createElement('div', _extends({}, this.props, { style: styles.row })),
                _react2['default'].createElement('div', { style: rowAfter })
            );
        }
    }]);

    return Row;
})(_react.Component);

exports['default'] = Row;
module.exports = exports['default'];