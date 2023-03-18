import React from "react";

function BuildGame({ game, setGameDeal }) {
  function handleGameClick(e) {
    setGameDeal(e.target.parentElement.id);
  }

  return (
    <div className="GameCard" id={game.gameID}>
      <h2>{game.external}</h2>
      <img src={game.thumb} width="200px" height="75px" alt={game.external}></img>
      <p>Cheapest Price Available - ${game.cheapest}</p>
      <button onClick={handleGameClick}>See Deals</button>
    </div>
  );
}

export default BuildGame;
