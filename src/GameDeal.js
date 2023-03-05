import React, { useState, useEffect } from "react";

function GameDeal({ gameID }) {
  useEffect(() => {
    if (gameID !== null) {
      fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [gameID]);

  return (
    <div className="GameDeal">
      <h1>{gameID}</h1>
    </div>
  );
}

export default GameDeal;
