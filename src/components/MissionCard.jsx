import "../styles/card.css";

function MissionCard({
  mission,
  deleteMission,
  addCompletedMission,
  editMissionfn
}) {
  return (
    <div className="mission-card">

      <div className="mission-title">
        <h1>{mission.title}</h1>
      </div>

      <div className="mission-card-input">
        <h3>Description:</h3>
        <p>{mission.description}</p>
      </div>

      <div className="mission-info">
        {mission.date && <span>Date: {mission.date}</span>}
        {mission.time && <span>Time: {mission.time}</span>}
      </div>

      <div className="mission-buttons">

        <div className="mission-card-completebtn">
          <button
            type="button"
            onClick={() => addCompletedMission(mission)}
          >
            Complete
          </button>
        </div>

        <div className="mission-card-editbtn">
          <button onClick={()=>editMissionfn(mission)}>
            Edit
          </button>

        </div>

        

        <div className="mission-card-deletebtn">
          <button
            type="button"
            onClick={() => deleteMission(mission.title)}
          >
            Delete
          </button>
        </div>

      </div>

    </div>
  );
}

export default MissionCard;