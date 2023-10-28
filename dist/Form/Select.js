"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../../../index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Select = function Select(props) {
  return /*#__PURE__*/_react.default.createElement("select", {
    className: "select-field",
    id: props.field.id,
    name: props.field.name,
    onChange: props.handleChange,
    "aria-required": props.field.isRequired
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "",
    className: "placeholder"
  }, props.field.placeholder), props.field.options.map(function (field, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: field.value
    }, field.text);
  }));
};
var _default = exports.default = Select;