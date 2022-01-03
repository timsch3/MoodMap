import "./Stats.scss";
import * as dateHandling from "../functions/dateHandling";
import * as dataHandling from "../functions/dataHandling";

const Stats = () => {
  const currentMonthData = dataHandling.getDataForMonth(
    dateHandling.today.getUTCFullYear(),
    dateHandling.today.getUTCMonth()
  );
  console.log(currentMonthData);
  return (
    <div>test</div>
    //   <main>
    //     <h2>Stats</h2>
    //     <h3>{dateHandling.currentMonthString}</h3>
    //     <div className="stats-container">
    //       <div className="stats-sub-container">
    //         <div className="stats-smiley">😁</div>
    //         <p>{veryGoodDaysCurrentMonth}</p>
    //         <div className="stats-info">
    //           {veryGoodDaysCurrentMonth} very good days this month.
    //         </div>
    //       </div>

    //       <div className="stats-sub-container">
    //         <div className="stats-smiley">🙂</div>
    //         <p>{goodDaysCurrentMonth}</p>
    //         <div className="stats-info">
    //           {goodDaysCurrentMonth} good days this month.
    //         </div>
    //       </div>

    //       <div className="stats-sub-container">
    //         <div className="stats-smiley">😐</div>
    //         <p>{regularDaysCurrentMonth}</p>
    //         <div className="stats-info">
    //           {regularDaysCurrentMonth} regular days this month.
    //         </div>
    //       </div>

    //       <div className="stats-sub-container">
    //         <div className="stats-smiley">🙁</div>
    //         <p>{badDaysCurrentMonth}</p>
    //         <div className="stats-info">
    //           {badDaysCurrentMonth} bad days this month.
    //         </div>
    //       </div>

    //       <div className="stats-sub-container">
    //         <div className="stats-smiley">😦</div>
    //         <p>{veryBadDaysCurrentMonth}</p>
    //         <div className="stats-info">
    //           {veryBadDaysCurrentMonth} very bad days this month.
    //         </div>
    //       </div>

    //       <div className="stats-sub-container">
    //         <div className="stats-smiley">❌</div>
    //         <p>{untrackedDaysCurrentMonth}</p>
    //         <div className="stats-info">
    //           {untrackedDaysCurrentMonth} untracked days this month.
    //         </div>
    //       </div>
    //     </div>
    //   </main>
  );
};

export default Stats;
