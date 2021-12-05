import "./Options.scss";

import Option from "../components/Option";
import OptionForced from "../components/OptionForced";

const Options = () => {
  return (
    <main>
      <h2>Choose what to keep track of:</h2>
      <ul>
        <li>
          <OptionForced name="Mood" />
        </li>
        <li>
          <Option name="Working" />
        </li>
        <li>
          <Option name="Exercise" />
        </li>
      </ul>
    </main>
  );
};

export default Options;
