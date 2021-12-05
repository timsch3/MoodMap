import "./Option.scss";

const OptionForced = (props) => {
  const { name } = props;

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
