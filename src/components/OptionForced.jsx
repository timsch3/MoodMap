import "./Option.scss";

import { useEffect } from "react";

const OptionForced = (props) => {
  const { name } = props;

  useEffect(() => {
    localStorage.setItem(`option-${name}`, true);
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
