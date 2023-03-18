import React, { useState } from "react";
import BuildGame from "./BuildGame";
import GameDeal from "./GameDeal";

function Games({ games, stores }) {
  const [gameDeal, setGameDeal] = useState(null);

  return (
    <div className="Container">
      <div className="GameStorage">
        {games.map((game, index) => (
          <BuildGame game={game} key={index} setGameDeal={setGameDeal} />
        ))}
      </div>
      <div className="DealStorage">
        <GameDeal gameID={gameDeal} stores={stores} />
      </div>
    </div>
  );
}

export default Games;
