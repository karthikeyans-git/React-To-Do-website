import { useState, useEffect } from "react";
import "../styles/form.css";

function MissionForm({
  missions,
  setMissions,}) 
  {

  const [error, setError] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const [individualMission, setMission] = useState({
    title: "",
    description: "",
    date: "",
    time: ""
  });

  


  // Submission
  function handlesubmit(e) {
    e.preventDefault();


      if (localStorage.getItem(individualMission.title)) {
        alert("Mission title already exists");
        return;
      }

      setMissions((prev) => [...prev, individualMission]);

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

    

    if (localStorage.getItem(title)) {
      setError("The title already exists");
      setIsDuplicate(true);
    } else {
      setError("");
      setIsDuplicate(false);
    }
  }

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
              value={individualMission.date}
              name="date"
              onChange={handleInput}
            />
          </div>

          <div className="input-group">
            <h3>Time:</h3>

            <input
              className="small-input"
              type="time"
              value={individualMission.time}
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
       Launch Mission
      </button>

    </form>
  );
}

export default MissionForm;