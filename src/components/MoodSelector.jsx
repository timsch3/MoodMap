import "./MoodSelector.scss";
import * as dataHandling from "../functions/dataHandling";
import * as dateHandling from "../functions/dateHandling";
import { useState, useEffect } from "react";

const MoodSelector = () => {
  // load data in state / save data with useEffect
  let [taskData, setTaskData] = useState(
    dataHandling.load(`task-Mood-${dateHandling.getCurrentDate(true)}`)
  );
  useEffect(() => {
    dataHandling.save(
      `task-Mood-${dateHandling.getCurrentDate(true)}`,
      taskData
    );
  }, [taskData]);

  function openMoodMenu() {
    const overlay = document.getElementById("today-mood-selector-overlay");
    const divs = document.querySelectorAll("#today-mood-selector > div");
    const ps = document.querySelectorAll("#today-mood-selector > div > p");

    overlay.style.cursor = "default";
    overlay.style.pointerEvents = "none";
    divs.forEach((div) => {
      div.style.pointerEvents = "all";
      div.style.minWidth = div.style.minHeight = "100px";
      div.style.fontSize = "2.5rem";
    });
    ps.forEach((p) => {
      p.style.fontSize = "0.8rem";
    });
    divs[0].style.transform = "translateY(-110%)";
    divs[1].style.transform = "translateX(-110%)";
    divs[3].style.transform = "translateX(110%)";
    divs[4].style.transform = "translateY(110%)";
  }

  function closeMoodMenu(selectedMood) {
    const overlay = document.getElementById("today-mood-selector-overlay");
    const divs = document.querySelectorAll("#today-mood-selector > div");
    const ps = document.querySelectorAll("#today-mood-selector > div > p");

    divs.forEach((div) => div.removeAttribute("style"));
    ps.forEach((p) => p.removeAttribute("style"));
    overlay.style.cursor = "pointer";
    overlay.style.pointerEvents = "all";
    setTaskData(selectedMood);
  }

  return (
    <div id="today-mood-selector-overlay" onClick={() => openMoodMenu()}>
      <div id="today-mood-selector">
        <div onClick={() => closeMoodMenu("very-good")}>
          😁
          <p>Very good</p>
        </div>
        <div onClick={() => closeMoodMenu("good")}>
          🙂
          <p>Good</p>
        </div>
        <div onClick={() => closeMoodMenu("indifferent")}>
          😐
          <p>Indifferent</p>
        </div>
        <div onClick={() => closeMoodMenu("bad")}>
          🙁
          <p>Bad</p>
        </div>
        <div onClick={() => closeMoodMenu("very-bad")}>
          😦
          <p>Very bad</p>
        </div>
      </div>
    </div>
  );
};

export default MoodSelector;
