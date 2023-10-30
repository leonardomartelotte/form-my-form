"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../../index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Option = function Option(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "options-container"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "options-container-title"
  }, props.field.title, ":"), props.field.options.map(function (field, i) {
    return /*#__PURE__*/_react.default.createElement("label", {
      className: "options-items",
      key: field.value
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      id: props.field.name + i,
      name: props.field.name,
      value: field.value,
      onChange: props.handleChange,
      required: props.field.isRequired
    }), field.text);
  }));
};
var _default = exports.default = Option;