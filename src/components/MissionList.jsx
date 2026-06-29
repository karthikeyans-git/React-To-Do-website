import MissionCard from "./MissionCard";
import "../styles/MissionList.css";

function MissionList({
  missionList,
  deleteMission,
  addCompletedMission,
  editMissionfn

}) {
  return (
    <div>
      <h2>Missions</h2>

      <div className="mission-container">

        {missionList.map((m, index) => {
          return (
            <div key={index}>

              <MissionCard
                mission={m}
                deleteMission={deleteMission}
                addCompletedMission={addCompletedMission}
                 editMissionfn={editMissionfn}
              />

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default MissionList;