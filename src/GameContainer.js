import React, { useState } from "react";
import GameSearch from "./GameSearch";

function GameContainer() {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  return (
    <div className="GameContainer">
      <GameSearch search={search} setSearch={setSearch} setGames={setGames} />
    </div>
  );
}

export default GameContainer;
