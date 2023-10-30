"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../../index.css");
var _arrowDown = _interopRequireDefault(require("../../svg/arrow-down.svg"));
var _useClickOutside = _interopRequireDefault(require("../../composables/useClickOutside"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MultiSelect = function MultiSelect(props) {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOptions = _useState2[0],
    setSelectedOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    dropdownOpen = _useState4[0],
    setDropdownOpen = _useState4[1];
  var eRef = (0, _react.useRef)(null);
  var element = (0, _react.useRef)(null);
  var toggleDropdown = function toggleDropdown() {
    setDropdownOpen(function (currentState) {
      return !currentState;
    });
  };
  var setData = function setData(e) {
    eRef.current = e;
    setSelectedOptions(function (currentState) {
      if (currentState.includes(e.target.value)) {
        return currentState.filter(function (value) {
          return value !== e.target.value;
        });
      }
      return [].concat(_toConsumableArray(currentState), [e.target.value]);
    });
  };
  (0, _useClickOutside.default)(element, function () {
    return setDropdownOpen(false);
  });
  (0, _react.useEffect)(function () {
    if (eRef.current) {
      props.handleChange({
        target: {
          id: eRef.current.target.name,
          value: selectedOptions
        }
      });
    }
  }, [selectedOptions]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "multi-select-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "multi-select-field",
    onClick: toggleDropdown,
    ref: element
  }, /*#__PURE__*/_react.default.createElement("div", null, props.field.placeholder, "\xA0", selectedOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "(", selectedOptions.length, ")")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _arrowDown.default,
    className: dropdownOpen ? "rotate-arrow" : "",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: dropdownOpen ? "multi-select-field-options" : " multi-select-field-options multi-select-field-closed"
  }, props.field.options.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement("label", {
      className: "multi-select-label",
      key: i
    }, /*#__PURE__*/_react.default.createElement("input", {
      id: props.field.id + i,
      type: "checkbox",
      value: option.value,
      name: props.field.name,
      checked: selectedOptions.includes(option.value),
      onChange: setData
    }), option.text);
  })));
};
var _default = exports.default = MultiSelect;