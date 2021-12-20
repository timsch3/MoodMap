import React, { useEffect, useState } from "react";
import * as dataHandling from "../functions/dataHandling";
import "./Option.scss";

const Option = (props) => {
  const { name, options, setOptions } = props;
  const option = options.findIndex((el) => el.name === name); // get index of this option in options array
  const [optionsState, setOptionsState] = useState(options); // for re-rendering checkbox when option is changed

  function handleOptions() {
    let changedOptions = options.map((elt) => {
      if (elt.name === name) {
        if (elt.active === false) {
          elt.active = true;
          return elt;
        } else {
          elt.active = false;
          return elt;
        }
      } else return elt;
    });
    dataHandling.save(
      `option-${changedOptions[option].name}`,
      changedOptions[option].active
    );
    setOptions(changedOptions);
    setOptionsState(changedOptions);
  }

  useEffect(() => {
    setOptionsState(options);
  }, [options, optionsState]);

  return (
    <label id="options-option" htmlFor={`options-option-${name}`}>
      {name}
      <input
        type="checkbox"
        id={`options-option-${name}`}
        onChange={() => handleOptions()}
        checked={options[option].active}
      />
    </label>
  );
};

export default Option;
