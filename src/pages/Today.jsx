import MoodSelector from "../components/MoodSelector";
import Task from "../components/Task";
import * as dateHandling from "../functions/dateHandling";

const Today = (props) => {
  const { options } = props;
  return (
    <main>
      <p>{dateHandling.getCurrentDate()}</p> {/* get date in local format */}
      <h2>How are you feeling today?</h2>
      <MoodSelector />
      {options.map((el, i) => {
        return el.active ? (
          <Task name={el.name} type={el.type} key={i} />
        ) : null;
      })}
    </main>
  );
};

export default Today;
