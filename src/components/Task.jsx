import "./Task.scss";
import * as dataHandling from "../functions/dataHandling";
import * as dateHandling from "../functions/dateHandling";
import { useState, useEffect } from "react";

const Task = (props) => {
  const { name, type } = props;

  const emptyTaskValue = type === "select" || "text" ? "" : false;

  const [task] = useState(dataHandling.load(`option-${name}`) || false); // option active?

  // load data in state, save data with useEffect
  let [taskData, setTaskData] = useState(
    dataHandling.load(`task-${name}-${dateHandling.getCurrentDate(true)}`) ||
      emptyTaskValue
  );
  useEffect(() => {
    dataHandling.save(
      `task-${name}-${dateHandling.getCurrentDate(true)}`,
      taskData
    );
  }, [name, taskData]);

  let taskTemplate; // render component based on its type
  switch (type) {
    case "check":
      taskTemplate = (
        <label id="today-task" htmlFor={`today-task-${name}`}>
          {name}
          <input
            type="checkbox"
            id={`today-task-${name}`}
            onChange={() => setTaskData(!taskData)}
            checked={taskData}
          />
        </label>
      );
      break;
    case "text":
      taskTemplate = (
        <label id="today-task" htmlFor={`today-task-${name}`}>
          {name}
          <textarea
            id={`today-task-${name}`}
            rows="4"
            cols="30"
            onChange={(e) => setTaskData(e.target.value)}
            value={taskData}
          ></textarea>
        </label>
      );
      break;
    default:
  }
  return task === true ? taskTemplate : null;
};

export default Task;
