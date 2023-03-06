import React, { useState } from "react";
import GameSearch from "./GameSearch";
import Games from "./Games";

function GameContainer({stores}) {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

  return (
    <div className="GameContainer">
      <GameSearch search={search} setSearch={setSearch} setGames={setGames} />
      <Games games={games} stores={stores}/>
    </div>
  );
}

export default GameContainer;
