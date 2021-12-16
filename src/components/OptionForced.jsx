import "./Option.scss";
import { useEffect } from "react";
import * as dataHandling from "../functions/dataHandling";

const OptionForced = (props) => {
  const { name } = props;

  useEffect(() => {
    dataHandling.save(`option-${name}`, true);
  }, [name]);

  return (
    <div id="options-option">
      <label htmlFor={`options-option-${name}`}>{name}</label>
      <input
        type="checkbox"
        name={`options-option-${name}`}
        id={`options-option-${name}`}
        defaultChecked={true}
        disabled={true}
      />
    </div>
  );
};

export default OptionForced;
