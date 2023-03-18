import React, { useState } from "react";
import BuildGame from "./BuildGame";
import GameDeals from "./GameDeals";

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
        <GameDeals gameID={gameDeal} stores={stores} />
      </div>
    </div>
  );
}

export default Games;
