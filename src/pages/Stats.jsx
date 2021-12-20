import "./Stats.scss";
import * as dateHandling from "../functions/dateHandling";
import * as dataHandling from "../functions/dataHandling";

const Stats = () => {
  return (
    <main>
      <h2>Stats</h2>
      <h3>{dateHandling.currentMonthName}</h3>
      <div className="stats-container">
        <div className="stats-sub-container">
          <div className="stats-smiley">😁</div>
          <p>{dataHandling.goodDaysCurrentMonth}</p>
          <div className="stats-info">
            Mood marked as "very good" on {dataHandling.goodDaysCurrentMonth}{" "}
            days in this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙂</div>
          <p>{dataHandling.goodDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "good" on {dataHandling.goodDaysCurrentMonth} days in
            this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😐</div>
          <p>{dataHandling.regularDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "indifferent" on{" "}
            {dataHandling.regularDaysCurrentMonth} days in this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙁</div>
          <p>{dataHandling.badDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "bad" on {dataHandling.badDaysCurrentMonth} days in
            this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😦</div>
          <p>{dataHandling.veryBadDaysCurrentMonth}</p>{" "}
          <div className="stats-info">
            Mood marked as "very bad" on {dataHandling.veryBadDaysCurrentMonth}{" "}
            days in this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">❌</div>
          <p>{dataHandling.untrackedDaysCurrentMonth}</p>
          <div className="stats-info">
            Mood not tracked on {dataHandling.untrackedDaysCurrentMonth} days in
            this month.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stats;
