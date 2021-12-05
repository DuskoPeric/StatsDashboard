import { useEffect, useState, Fragment } from "react";
import ActionSide from "./actionSide/actionSide";
import ShowSide from "./showSide/showSide";
import { database } from "../../firebase/firebase.utils";
import { ref, onValue, push, set } from "firebase/database";

const Layout = () => {
  const [data, setData] = useState([]);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    getPlayers();
  }, []);

  const setWide = data => {
    setIsWide(data);
  };

  const getPlayers = () => {
    const playersRef = ref(database, "players/");
    onValue(playersRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        setData(data);
      }
    });
  };

  const updateGames = (data, id) => {
    const gamesRef = ref(database, `players/${id}/games`);
    const newGameRef = push(gamesRef);
    set(newGameRef, data);
  };

  return (
    <Fragment>
      <ActionSide updateGames={updateGames} data={data} changeWide={setWide} />
      <ShowSide isWide={isWide} data={data} />
    </Fragment>
  );
};

export default Layout;
