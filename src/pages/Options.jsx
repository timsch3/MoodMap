import Option from "../components/Option";
import OptionForced from "../components/OptionForced";

const Options = () => {
  return (
    <main>
      <h2>Choose what to keep track of:</h2>
      <OptionForced name="Mood" />
      <Option name="Notes" />
      <Option name="Work" />
      <Option name="Exercise" />
    </main>
  );
};

export default Options;
