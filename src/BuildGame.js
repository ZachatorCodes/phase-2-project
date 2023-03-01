import React from "react";

function BuildGame({ game }) {
  return (
    <div className="GameCard" id={game.gameID}>
      <h2>{game.external}</h2>
      <img src={game.thumb} width="200px" height="75px"></img>
    </div>
  );
}

export default BuildGame;
