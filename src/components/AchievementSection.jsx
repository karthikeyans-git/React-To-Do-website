import "../styles/AchievementSection.css";

function AchievementSection({ completedMissions }) {
  return (
    <div className="achievement-section">

      <h2> Mission Accomplished</h2>

      {completedMissions.length === 0 ? (
        <p className="empty-message">
          No Missions Completed Yet
        </p>
      ) : (
        completedMissions.map((m) => {
          return (
            <div className="achievement-card" key={m.title}>
              <p> {m.title}</p>
            </div>
          );
        })
      )}

    </div>
  );
}

export default AchievementSection;