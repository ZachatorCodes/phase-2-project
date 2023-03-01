import React from "react";

function BuildGame({ game }) {
  return (
    <div className="GameCard">
      <h2>{game.internalName}</h2>
    </div>
  );
}

export default BuildGame;
