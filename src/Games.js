import React from "react";
import BuildGame from "./BuildGame";

function Games({ games }) {
  return games.map((game, index) => {
    return <BuildGame game={game} key={index} />;
  });
}

export default Games;
