import React from "react";
import BuildGame from "./BuildGame";

function Games({ games }) {
  return (
    <div id="Container">
      <div className="GameStorage">
        {games.map((game, index) => {
          return <BuildGame game={game} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Games;
