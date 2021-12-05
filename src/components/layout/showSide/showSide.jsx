import { useState, useEffect } from "react";
import "./showSide.scss";
import PieShow from "./pieShow/pieShow";
import BarShow from "./barShow/barShow";
import RadarShow from "./radarShow/radarShow";
import StackedbarShow from "./stackedbarShow/stackedbarShow";
import AreaShow from "./areaShow/areaShow";
import RadialBarShow from "./radialBarShow/radialBarShow";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase/firebase.utils";

const ShowSide = ({ data, isWide }) => {
  const [activePlayer, setActivePlayer] = useState(0);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      getPlayerGames();
    }
  }, [activePlayer, data]);

  const getPlayerGames = () => {
    const playerRef = ref(database, `players/${activePlayer}/games`);
    onValue(playerRef, snapshot => {
      const playerData = snapshot.val();
      setPlayerData(Object.values(playerData));
    });
  };

  const handlePlayer = id => {
    setActivePlayer(id);
  };

  return (
    <div className={`show-container ${isWide ? "wide" : ""}`}>
      <div className="select-container">
        {data.map(player => (
          <div
            className={`btn ${activePlayer === player.id ? "active" : ""}`}
            key={player.id}
            onClick={() => {
              handlePlayer(player.id);
            }}
          >
            <div className="user-icon">
              <div className="user-body"></div>
              <div className="user-head"></div>
            </div>
            {player.name}
          </div>
        ))}
      </div>
      {playerData && playerData.length > 0 && (
        <div className="chart-container">
          <div className="chart-box w-long m-r m-r-s">
            <h2>Points per game</h2>
            <BarShow data={playerData} />
          </div>
          <div className="chart-box w-short m-r ">
            <h2>Field Goal</h2>
            <PieShow
              games={playerData}
              valueOne="fpt"
              valueTwo="fps"
              custom={true}
            />
          </div>
          <div className="chart-box w-short flex m-r-s">
            <RadarShow games={playerData} />
          </div>
          <div className="chart-box w-short m-r">
            <h2>
              <span>3 </span>Points
            </h2>
            <PieShow games={playerData} valueOne="tpt" valueTwo="tps" />
          </div>
          <div className="chart-box w-short m-r m-r-s">
            <h2>
              <span>2 </span>Points
            </h2>
            <PieShow games={playerData} valueOne="fpt" valueTwo="fps" />
          </div>
          <div className="chart-box w-long ">
            <h2>Scoring types</h2>
            <StackedbarShow data={playerData} />
          </div>
          <div className="chart-box w-short m-r m-r-s">
            <h2>Free Throw</h2>
            <PieShow games={playerData} valueOne="ftt" valueTwo="fts" />
          </div>
          <div className="chart-box w-long m-r">
            <h2>Minutes</h2>
            <AreaShow data={playerData} />
          </div>
          <div className="chart-box w-short">
            <h2>Fouls</h2>
            <RadialBarShow data={playerData} />
          </div>
        </div>
      )}
      {playerData && playerData.length === 0 && (
        <p className="info-text">No games for this player</p>
      )}
      {!playerData && (
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default ShowSide;
