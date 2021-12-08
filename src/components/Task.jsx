import "./Task.scss";
import * as dataHandling from "../functions/dataHandling";
import { useState, useEffect } from "react";

const Task = (props) => {
  const { name, type } = props;

  const [task] = useState(dataHandling.loadLocal(`option-${name}`) || false);
  const [taskDataBoolean, setTaskDataBoolean] = useState(
    dataHandling.loadLocal(`task-${name}`) || false
  );
  const [taskDataString, setTaskDataString] = useState(
    dataHandling.loadLocal(`task-${name}`) || ""
  );

  useEffect(() => {
    dataHandling.saveLocal(`task-${name}`, taskDataBoolean);
  }, [name, taskDataBoolean]);

  useEffect(() => {
    dataHandling.saveLocal(`task-${name}`, taskDataString);
  }, [name, taskDataString]);

  let taskTemplate;

  switch (type) {
    case "select":
      taskTemplate = (
        <div id="today-task">
          <label htmlFor={`today-task-${name}`}>{name}</label>
          <select
            id={`today-task-${name}`}
            onChange={(e) => setTaskDataString(e.target.value)}
            value={taskDataString}
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
            onChange={() => setTaskDataBoolean(!taskDataBoolean)}
            checked={taskDataBoolean}
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
            onChange={(e) => setTaskDataString(e.target.value)}
            value={taskDataString}
          ></textarea>
        </div>
      );
      break;
    default:
  }
  return task === true ? taskTemplate : null;
};

export default Task;
