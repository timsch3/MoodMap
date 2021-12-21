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
            {dataHandling.goodDaysCurrentMonth} very good days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙂</div>
          <p>{dataHandling.goodDaysCurrentMonth}</p>
          <div className="stats-info">
            {dataHandling.goodDaysCurrentMonth} good days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😐</div>
          <p>{dataHandling.regularDaysCurrentMonth}</p>
          <div className="stats-info">
            {dataHandling.regularDaysCurrentMonth} regular days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">🙁</div>
          <p>{dataHandling.badDaysCurrentMonth}</p>
          <div className="stats-info">
            {dataHandling.badDaysCurrentMonth} bad days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">😦</div>
          <p>{dataHandling.veryBadDaysCurrentMonth}</p>
          <div className="stats-info">
            {dataHandling.veryBadDaysCurrentMonth} very bad days this month.
          </div>
        </div>

        <div className="stats-sub-container">
          <div className="stats-smiley">❌</div>
          <p>{dataHandling.untrackedDaysCurrentMonth}</p>
          <div className="stats-info">
            {dataHandling.untrackedDaysCurrentMonth} untracked days this month.
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stats;
