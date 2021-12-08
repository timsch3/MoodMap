import "./Option.scss";
import * as dataHandling from "../functions/dataHandling";
import { useState, useEffect } from "react";

const Option = (props) => {
  const { name } = props;

  const [option, setOption] = useState(
    dataHandling.loadLocal(`option-${name}`) || false
  );

  useEffect(() => {
    dataHandling.saveLocal(`option-${name}`, option);
  }, [option, name]);

  return (
    <div id="options-option">
      <label htmlFor={`options-option-${name}`}>{name}</label>
      <input
        type="checkbox"
        id={`options-option-${name}`}
        onChange={() => setOption(!option)}
        checked={option}
      />
    </div>
  );
};

export default Option;
