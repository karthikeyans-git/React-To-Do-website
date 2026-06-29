import { useState, useEffect } from "react";
import "../styles/form.css";

function MissionForm({
  missions,
  setMissions,
  editMission,
  setEditMission,
   launchRocket,
  setLaunchRocket,
  setRocketMessage,
  rocketMessage
}) 
  {
  const [error, setError] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const [individualMission, setMission] = useState({
    title: "",
    description: "",
    date: "",
    time: ""
  });

  //Edit
 useEffect(() => {
  if (editMission) {
    setMission(editMission);
  }
}, [editMission]);
  


  // Submission
  function handlesubmit(e) {
    e.preventDefault();
    if(editMission){
      let updated=missions.map((m)=>{
        if(m.title===editMission.title){
          return individualMission;
        }
        return m;
      })

      setMissions(updated);
      setEditMission(null);
      setMission({
    title: "",
    description: "",
    date: "",
    time: ""
  });
  setError("");
setIsDuplicate(false);
 setLaunchRocket(true);

      setTimeout(() => {
          setLaunchRocket(false);
      }, 1000);
  return;
    }
 


      if (localStorage.getItem(individualMission.title)) {
        alert("Mission title already exists");
        return;
      }
          const random =
      messages[Math.floor(Math.random() * messages.length)];

    setRocketMessage(random);
      setLaunchRocket(true);

      setTimeout(() => {
          setLaunchRocket(false);
      }, 1000);

      setTimeout(() => {

        setMissions((prev) => [...prev, individualMission]);

        setLaunchRocket(false);

    }, 500);

      localStorage.setItem(
        individualMission.title,
        JSON.stringify(individualMission)
      );
    

    setTimeout(() => {

      setMission({
        title: "",
        description: "",
        date: "",
        time: ""
      });

      setError("");
      setIsDuplicate(false);

    }, 500);
  }

  // Store Input
  function handleInput(e) {
    setMission((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  // Check Duplicate Title
  function handleUnique(title) {

    if(editMission && title === editMission.title){
    setError("");
    setIsDuplicate(false);
    return;
  }

    if (localStorage.getItem(title)) {
      setError("The title already exists");
      setIsDuplicate(true);
    } else {
      setError("");
      setIsDuplicate(false);
    }
  }
  const messages = [
  "Mission launched successfully! ",
  "Another step toward your goal!",
  "Keep pushing forward!",
  "Mission accepted, Commander!",
  "Success starts with one task.",
  "Dream. Plan. Launch.",
  "Every mission counts.",
  "Small progress is still progress.",
  "Ready for the next adventure?",
  "Keep building your future!"
];

  return (
    <form onSubmit={handlesubmit}>

      <h2>MISSION</h2>

      <div className="form-grid">

        <div className="left-side">

          <div className="input-group">
            <h3>Title:</h3>

            <input
              type="text"
              value={individualMission.title}
              required
              name="title"
              onChange={(e) => {
                handleInput(e);
                handleUnique(e.target.value.trim());
              }}
            />

            <div className="error-message">
              {error}
            </div>
          </div>

          <div className="input-group">
            <h3>Description:</h3>

            <textarea
              value={individualMission.description}
              name="description"
              onChange={handleInput}
              rows="3"
            />
          </div>

        </div>

        <div className="right-side">

          <div className="input-group">
            <h3>Date:</h3>

            <input
              className="small-input"
              type="date"
              value={individualMission.date ||""}
              name="date"
              onChange={handleInput}
            />
          </div>

          <div className="input-group">
            <h3>Time:</h3>

            <input
              className="small-input"
              type="time"
              value={individualMission.time ||" "}
              name="time"
              onChange={handleInput}
            />
          </div>

        </div>

      </div>
      <br></br>
      <button
        className="launch-btn"
        disabled={isDuplicate}
        type="submit"
      >
       {editMission?"Edit":"Launch Mission"}
      </button>

    </form>
  );
}

export default MissionForm;