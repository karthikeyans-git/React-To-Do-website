function AchievementSection({completedMissions}) {
  return (
    <div>
    <h3> Mission Accomplished</h3>
    {completedMissions.map((m)=>{
      return(<div key={m.title}>
        <p>{m.title}</p>
      </div>)
    })}
    </div>
  );
}

export default AchievementSection;