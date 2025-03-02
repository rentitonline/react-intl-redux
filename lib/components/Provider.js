"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IntlProvider = _interopRequireDefault(require("./IntlProvider"));

var Provider = function Provider(_ref) {
  var store = _ref.store,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_IntlProvider.default, null, children));
};

Provider.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.element.isRequired
} : {};
var _default = Provider;
exports.default = _default;