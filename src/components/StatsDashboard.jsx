function StatsDashboard({missions,completedMissions}) {

  const successRate =
  (completedMissions.length /
    (missions.length + completedMissions.length)) *
  100;
  return (
    <div>
     <h3>Total Missions:{missions.length+completedMissions.length}</h3>
     <h3>Completed Missions:{completedMissions.length}</h3>
     <h3>Pendng Missions:{missions.length}</h3>
     <h3> Success Rate: {isNaN(successRate) ? 0 : successRate.toFixed(2)}%</h3>
    </div>
  );
}

export default StatsDashboard;