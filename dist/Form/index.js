"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../../../index.css");
var _Button = _interopRequireDefault(require("./Button"));
var _Input = _interopRequireDefault(require("./Input"));
var _Select = _interopRequireDefault(require("./Select"));
var _MultiSelect = _interopRequireDefault(require("./MultiSelect"));
var _Option = _interopRequireDefault(require("./Option"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Form = function Form(props) {
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    formError = _useState4[0],
    setFormError = _useState4[1];
  var formRef = /*#__PURE__*/(0, _react.createRef)();
  var submitForm = function submitForm(e) {
    e.preventDefault();
    var form = formRef;
    var error = [];
    for (var i = 0; i < form.current.elements.length; i++) {
      var _form$current, _form$current2, _form$current3, _form$current5;
      // Reset error border effect
      document.getElementById(form === null || form === void 0 || (_form$current = form.current) === null || _form$current === void 0 ? void 0 : _form$current.elements[i].getAttribute("id")).style.border = "";
      if (form !== null && form !== void 0 && (_form$current2 = form.current) !== null && _form$current2 !== void 0 && (_form$current2 = _form$current2.elements[i]) !== null && _form$current2 !== void 0 && _form$current2.getAttribute("aria-required") && !(form !== null && form !== void 0 && (_form$current3 = form.current) !== null && _form$current3 !== void 0 && _form$current3.elements[i].value.length)) {
        var _form$current4;
        error.push(form === null || form === void 0 || (_form$current4 = form.current) === null || _form$current4 === void 0 ? void 0 : _form$current4.elements[i].getAttribute("id"));
      }
      // Check for errors on input text
      if (form !== null && form !== void 0 && (_form$current5 = form.current) !== null && _form$current5 !== void 0 && (_form$current5 = _form$current5.elements[i]) !== null && _form$current5 !== void 0 && _form$current5.getAttribute("regex")) {
        var _form$current6, _form$current7, _form$current8;
        if (!eval(form === null || form === void 0 || (_form$current6 = form.current) === null || _form$current6 === void 0 || (_form$current6 = _form$current6.elements[i]) === null || _form$current6 === void 0 ? void 0 : _form$current6.getAttribute("regex")).test(form !== null && form !== void 0 && (_form$current7 = form.current) !== null && _form$current7 !== void 0 && _form$current7.elements[i].getAttribute("type") ? form.current.elements[i].getAttribute("value") : form === null || form === void 0 || (_form$current8 = form.current) === null || _form$current8 === void 0 ? void 0 : _form$current8.elements[i].value)) {
          var _form$current9;
          error.push(form === null || form === void 0 || (_form$current9 = form.current) === null || _form$current9 === void 0 ? void 0 : _form$current9.elements[i].getAttribute("id"));
        }
      }
    }
    // Apply error border effect
    error.map(function (e) {
      document.getElementById(e).style.border = "1px solid #f00";
    });
    if (error.length > 0) {
      setFormError(_objectSpread(_objectSpread({}, formError), {}, {
        generalErrorMessage: props.setup.generalErrorMessage
      }));
    } else {
      setFormError({});
      props.submittedData(formData);
    }
  };
  var checkErrors = function checkErrors(target, error, errorMessage) {
    setFormError(function (currentError) {
      var _target$value;
      if ((target === null || target === void 0 || (_target$value = target.value) === null || _target$value === void 0 ? void 0 : _target$value.length) > 0 && error && !Object.keys(currentError).includes(target.id)) {
        return _objectSpread(_objectSpread({}, currentError), {}, _defineProperty({}, target.id, errorMessage));
      }
      if (!error || target.value.length === 0) {
        delete currentError[target.id];
        return _objectSpread({}, currentError);
      }
      return currentError;
    });
  };
  var handleChange = function handleChange(e) {
    var target = e.target,
      error = e.error,
      errorMessage = e.errorMessage;
    // Check and set errors
    checkErrors(target, error, errorMessage);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, target.id, target.value)));
  };

  // Prepares each field for the form
  var generateFormItem = function generateFormItem(field, i) {
    switch (field.kind) {
      case "text":
        return /*#__PURE__*/_react.default.createElement(_Input.default, {
          key: i,
          field: field,
          value: formData[field.name],
          error: formError[field.name],
          handleChange: handleChange
        });
      case "select":
        return /*#__PURE__*/_react.default.createElement(_Select.default, {
          key: i,
          field: field,
          handleChange: handleChange,
          value: formData[field.name]
        });
      case "multi-select":
        return /*#__PURE__*/_react.default.createElement(_MultiSelect.default, {
          key: i,
          field: field,
          handleChange: handleChange
        });
      case "option":
        return /*#__PURE__*/_react.default.createElement(_Option.default, {
          key: i,
          field: field,
          handleChange: handleChange,
          value: formData[field.name]
        });
      case "button":
        return /*#__PURE__*/_react.default.createElement(_Button.default, {
          key: i,
          field: field
        });
      default:
        return;
    }
  };
  // Returns form with full design
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-div"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-div"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, props.setup.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "subtitle"
  }, props.setup.subtitle)), /*#__PURE__*/_react.default.createElement("form", {
    ref: formRef,
    onSubmit: submitForm
  }, props.setup.fields.map(function (field, i) {
    // If form items are grouped (show side by side):
    if (field.length) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: i,
        className: "field-group"
      }, field.map(function (field, i) {
        return generateFormItem(field, i);
      }));
    }
    // If form items are not grouped:
    return generateFormItem(field, i);
  })), /*#__PURE__*/_react.default.createElement("p", {
    className: "field-error-message"
  }, formError === null || formError === void 0 ? void 0 : formError.generalErrorMessage));
};
var _default = exports.default = Form;