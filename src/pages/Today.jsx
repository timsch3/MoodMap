import Task from "../components/Task";
import * as dateHandling from "../functions/dateHandling";

const Today = (props) => {
  const { options } = props;
  return (
    <main>
      <p>{dateHandling.getCurrentDate()}</p>
      <h2>What's up today?</h2>
      {options.map((el, i) => {
        return el.active ? (
          <Task name={el.name} type={el.type} key={i} />
        ) : null;
      })}
    </main>
  );
};

export default Today;
