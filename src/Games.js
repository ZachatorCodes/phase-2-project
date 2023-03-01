import React from "react";
import BuildGame from "./BuildGame";

function Games({ games }) {
  return (
    <div className="GameStorage">
      {games.map((game, index) => {
        return <BuildGame game={game} key={index} />;
      })}
    </div>
  );
}

export default Games;
