import "./Option.scss";
import * as dataHandling from "../functions/dataHandling";
import { useState, useEffect } from "react";

const Option = (props) => {
  const { name } = props;

  const [option, setOption] = useState(
    dataHandling.load(`option-${name}`) || false
  );

  useEffect(() => {
    dataHandling.save(`option-${name}`, option);
  }, [name, option]);

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
