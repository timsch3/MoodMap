import "./Task.scss";

import { useState } from "react";

const Task = (props) => {
  const { name, type } = props;

  const [task] = useState(
    JSON.parse(localStorage.getItem(`option-${name}`)) || false
  );

  let taskTemplate;

  switch (type) {
    case "select":
      taskTemplate = (
        <div id="today-task">
          <label htmlFor={`today-task-${name}`}>{name}</label>
          <select id={`today-task-${name}`}>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
          </select>
        </div>
      );
      break;
    case "check":
      taskTemplate = (
        <div id="today-task">
          <label htmlFor={`today-task-${name}`}>{name}</label>
          <input type="checkbox" id={`today-task-${name}`} />
        </div>
      );
      break;
    default:
      break;
  }
  return task === true ? taskTemplate : null;
};

export default Task;
