import React, {useState} from "react";
import BuildGame from "./BuildGame";
import GameDeal from "./GameDeal";

function Games({ games }) {
  const [gameDeal, setGameDeal] = useState(null);

  return (
    <div className="Container">
      <div className="GameStorage">
        {games.map((game, index) => {
          return <BuildGame game={game} key={index} setGameDeal={setGameDeal}/>;
        })}
      </div>
      <div className="DealStorage">
        <GameDeal gameID={gameDeal}/>
      </div>
    </div>
  );
}

export default Games;
