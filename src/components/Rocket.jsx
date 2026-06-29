import "../styles/rocket.css";

function Rocket({ launchRocket, setLaunchRocket ,rocketMessage}) {
  return (
    <>
    <div className="rocket-section">
    <div className={launchRocket ? "rocket rocket-launch" : "rocket"}>
      🚀
    </div>
     <div className="rocket-bubble">
        {rocketMessage}
      </div>
      </div>
      </>
  );
  
}

export default Rocket;