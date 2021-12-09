import Task from "../components/Task";
import * as dateHandling from "../functions/dateHandling";

const Today = () => {
  return (
    <main>
      <p>{dateHandling.getCurrentDate()}</p>
      <h2>What's up today?</h2>
      <Task name="Mood" type="select" />
      <Task name="Notes" type="text" />
      <Task name="Work" type="check" />
      <Task name="Exercise" type="check" />
    </main>
  );
};

export default Today;
