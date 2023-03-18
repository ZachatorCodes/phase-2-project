import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Games from "./Games";

function GameSearch({stores}) {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);

  return (
    <div className="GameSearch">
      <SearchBar search={search} setSearch={setSearch} setGames={setGames} />
      <Games games={games} stores={stores}/>
    </div>
  );
}

export default GameSearch;
