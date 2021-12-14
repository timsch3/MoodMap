import "./Task.scss";
import * as dataHandling from "../functions/dataHandling";
import * as dateHandling from "../functions/dateHandling";
import { useState, useEffect } from "react";

const Task = (props) => {
  const { name, type } = props;

  const emptyTaskValue = type === "select" || "text" ? "" : false;

  const [task] = useState(dataHandling.load(`option-${name}`) || false); // option active?

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

  let taskTemplate;

  switch (type) {
    case "select":
      taskTemplate = (
        <div id="today-task">
          <label htmlFor={`today-task-${name}`}>{name}</label>
          <select
            id={`today-task-${name}`}
            onChange={(e) => setTaskData(e.target.value)}
            value={taskData}
          >
            <option value="please-select">--- Please select ---</option>
            <option value="very-good">Very good</option>
            <option value="good">Good</option>
            <option value="indifferent">Indifferent</option>
            <option value="bad">Bad</option>
            <option value="very-bad">Very bad</option>
          </select>
        </div>
      );
      break;
    case "check":
      taskTemplate = (
        <div id="today-task">
          <label htmlFor={`today-task-${name}`}>{name}</label>
          <input
            type="checkbox"
            id={`today-task-${name}`}
            onChange={() => setTaskData(!taskData)}
            checked={taskData}
          />
        </div>
      );
      break;
    case "text":
      taskTemplate = (
        <div id="today-task">
          <label htmlFor={`today-task-${name}`}>{name}</label>
          <br />
          <textarea
            id={`today-task-${name}`}
            rows="4"
            cols="30"
            onChange={(e) => setTaskData(e.target.value)}
            value={taskData}
          ></textarea>
        </div>
      );
      break;
    default:
  }
  return task === true ? taskTemplate : null;
};

export default Task;
