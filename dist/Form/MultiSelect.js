import React, { useEffect, useRef, useState } from "react";
import "../../../index.css";
import ArrowDown from "../../svg/arrow-down.svg";
import useClickOutside from "../../composables/useClickOutside";
const MultiSelect = props => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const eRef = useRef(null);
  const element = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(currentState => {
      return !currentState;
    });
  };
  const setData = e => {
    eRef.current = e;
    setSelectedOptions(currentState => {
      if (currentState.includes(e.target.value)) {
        return currentState.filter(value => value !== e.target.value);
      }
      return [...currentState, e.target.value];
    });
  };
  useClickOutside(element, () => setDropdownOpen(false));
  useEffect(() => {
    if (eRef.current) {
      props.handleChange({
        target: {
          id: eRef.current.target.name,
          value: selectedOptions
        }
      });
    }
  }, [selectedOptions]);
  return /*#__PURE__*/React.createElement("div", {
    className: "multi-select-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "multi-select-field",
    onClick: toggleDropdown,
    ref: element
  }, /*#__PURE__*/React.createElement("div", null, props.field.placeholder, "\xA0", selectedOptions.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, "(", selectedOptions.length, ")")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: ArrowDown,
    className: dropdownOpen ? "rotate-arrow" : "",
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: dropdownOpen ? "multi-select-field-options" : " multi-select-field-options multi-select-field-closed"
  }, props.field.options.map((option, i) => /*#__PURE__*/React.createElement("label", {
    className: "multi-select-label",
    key: i
  }, /*#__PURE__*/React.createElement("input", {
    id: props.field.id + i,
    type: "checkbox",
    value: option.value,
    name: props.field.name,
    checked: selectedOptions.includes(option.value),
    onChange: setData
  }), option.text))));
};
export default MultiSelect;