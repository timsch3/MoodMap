import "./MoodSelector.scss";
import * as dataHandling from "../functions/dataHandling";
import * as dateHandling from "../functions/dateHandling";
import { useState, useEffect } from "react";

const MoodSelector = () => {
  // load data in state, save data with useEffect
  let [taskData, setTaskData] = useState(
    dataHandling.load(`task-Mood-${dateHandling.getCurrentDate(true)}`)
  );
  useEffect(() => {
    dataHandling.save(
      `task-Mood-${dateHandling.getCurrentDate(true)}`,
      taskData
    );
  }, [taskData]);

  // handle the mood selection menu
  let [menuTrigger, setMenuTrigger] = useState(false); // when picking already selected value
  let [moodMenuOverlayActive, setMoodMenuOverlayActive] = useState(false);
  let [moodOptionClass, setMoodOptionClass] = useState(
    "today-mood-selector-option"
  );
  function openMoodMenu() {
    setMoodOptionClass(
      "today-mood-selector-option today-mood-selector-option-active"
    );
    setMoodMenuOverlayActive(true);
  }
  useEffect(() => {
    setMoodMenuOverlayActive(false);
    setMoodOptionClass("today-mood-selector-option");
  }, [taskData, menuTrigger]);

  return (
    <div
      onClick={() => openMoodMenu()}
      style={
        moodMenuOverlayActive
          ? { pointerEvents: "none", cursor: "default" }
          : { pointerEvents: "all", cursor: "pointer" }
      }
    >
      <div id="today-mood-selector">
        <div
          onClick={() => {
            setTaskData("very-good");
            setMenuTrigger(!menuTrigger);
          }}
          className={moodOptionClass}
          style={taskData === "very-good" ? { zIndex: "2" } : { zIndex: "1" }}
        >
          😁
          <p>Very good</p>
        </div>
        <div
          onClick={() => {
            setTaskData("good");
            setMenuTrigger(!menuTrigger);
          }}
          className={moodOptionClass}
          style={taskData === "good" ? { zIndex: "2" } : { zIndex: "1" }}
        >
          🙂
          <p>Good</p>
        </div>
        <div
          onClick={() => {
            setTaskData("indifferent");
            setMenuTrigger(!menuTrigger);
          }}
          className={moodOptionClass}
          style={taskData === "indifferent" ? { zIndex: "2" } : { zIndex: "1" }}
        >
          😐
          <p>Indifferent</p>
        </div>
        <div
          onClick={() => {
            setTaskData("bad");
            setMenuTrigger(!menuTrigger);
          }}
          className={moodOptionClass}
          style={taskData === "bad" ? { zIndex: "2" } : { zIndex: "1" }}
        >
          🙁
          <p>Bad</p>
        </div>
        <div
          onClick={() => {
            setTaskData("very-bad");
            setMenuTrigger(!menuTrigger);
          }}
          className={moodOptionClass}
          style={taskData === "very-bad" ? { zIndex: "2" } : { zIndex: "1" }}
        >
          😦
          <p>Very bad</p>
        </div>
      </div>
    </div>
  );
};

export default MoodSelector;
