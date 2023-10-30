"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../../index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(props) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "input-button",
    style: {
      backgroundColor: props.field.design.backgroundColor,
      color: props.field.design.color,
      border: props.field.design.border,
      borderRadius: props.field.design.borderRadius
    },
    type: props.field.type,
    placeholder: props.field.placeholder,
    id: props.field.id
  }, props.field.caption);
};
var _default = exports.default = Button;