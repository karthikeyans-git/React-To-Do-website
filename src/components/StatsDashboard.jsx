import "../styles/StatsDashboard.css"
function StatsDashboard({ missions, completedMissions }) {

  const successRate =
    (completedMissions.length /
      (missions.length + completedMissions.length)) *
    100;

  return (
    <div className="stats-dashboard">

      <h2>Mission Statistics</h2>

      <div className="stat-row">
        <span>Total Missions:</span>
        <span>{missions.length + completedMissions.length}</span>
      </div>

      <div className="stat-row">
        <span>Completed:</span>
        <span>{completedMissions.length}</span>
      </div>

      <div className="stat-row">
        <span>Pending:</span>
        <span>{missions.length}</span>
      </div>

      <div className="stat-row">
        <span>Success Rate:</span>
        <span>
          {isNaN(successRate) ? 0 : successRate.toFixed(2)}%
        </span>
      </div>

    </div>
  );
}

export default StatsDashboard;
