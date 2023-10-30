"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
function useClickOutside(ref, callback) {
  (0, _react.useEffect)(function () {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && event.target.className !== "multi-select-label" && event.target.type !== "checkbox" && event.target.className !== "multi-select-field-options") {
        callback();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return function () {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}
var _default = exports.default = useClickOutside;