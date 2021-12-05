import Task from "../components/Task";

const Today = () => {
  return (
    <main>
      <h2>What's up today?</h2>
      <Task name="Mood" type="select" />
      <Task name="Work" type="check" />
      <Task name="Exercise" type="check" />
    </main>
  );
};

export default Today;
