import React from "react";

function BuildWishlistApp({ game }) {
  return (
    <div className="Deal">
      <h1>{game.title}</h1>
      <img src={game.image}></img>
    </div>
  );
}

export default BuildWishlistApp;