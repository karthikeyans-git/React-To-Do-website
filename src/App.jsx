  import MissionForm from "./components/MissionForm";
  import MissionList from "./components/MissionList";
  import Rocket from "./components/Rocket";
  import AchievementSection from "./components/AchievementSection";
  import StatsDashboard from "./components/StatsDashboard";
  import QuoteBubble from "./components/QuoteBubble";
  import  "./styles/app.css";
  import "./styles/MissionList.css";

  import { useEffect, useState ,createContext} from "react";

  function App() {

  const [missions,setMissions] = useState(() => {
  const saved = localStorage.getItem("missionslist");
  if(saved){
    return JSON.parse(saved);
  }
  return [];
});
  const[completedMissions,setCompletedMissions]=useState(() => {
  const saved = localStorage.getItem("completedmissionslist");
  if(saved){
    return JSON.parse(saved);
  }
  return [];
});
  
    useEffect(()=>{ 
      localStorage.setItem("missionslist",JSON.stringify(missions));
    },[missions])
     useEffect(()=>{ 
      localStorage.setItem("completedmissionslist",JSON.stringify(completedMissions));
    },[completedMissions])
    
    function deleteMission(missiontitle){
      let newMissions=missions.filter((m)=>(m.title!=missiontitle))
      setMissions(newMissions)
    }

    function addCompletedMission(mission){
      setCompletedMissions((prev)=>[...prev,mission]);
      deleteMission(mission.title);
    }
  
    return (
     <div className="app">
      <div className="navbar">
        <h1>Mission Control</h1>
      </div>
        <MissionList
  missionList={missions}
  deleteMission={deleteMission}
  addCompletedMission={addCompletedMission}
/>

<div className="bottom-layout">

  <div className="form-area">
    <MissionForm
  missions={missions}
  setMissions={setMissions}
 
/>
  </div>

  <div className="achievement-area">
    <StatsDashboard
      missions={missions}
      completedMissions={completedMissions}
    />

    <AchievementSection
      completedMissions={completedMissions}
    />
  </div>

</div>

    <div className="rocket-area">
      <QuoteBubble />
      <Rocket />
    </div>
       
      </div>
    );
  }
  export default App;