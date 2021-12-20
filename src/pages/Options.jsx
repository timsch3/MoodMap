import Option from "../components/Option";
import OptionForced from "../components/OptionForced";

const Options = (props) => {
  const { options, setOptions } = props;

  return (
    <main>
      <h2>What do you want to track?</h2>
      <OptionForced name="Mood" />
      {options.map((el, i) => (
        <Option
          name={el.name}
          options={options}
          setOptions={setOptions}
          key={i}
        />
      ))}
    </main>
  );
};

export default Options;
