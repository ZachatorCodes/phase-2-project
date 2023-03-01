import React, { useState } from "react";

function GameSearch() {
  const [search, setSearch] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED:", search);
    setSearch("");
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${search}`)
      .then((r) => r.json())
      .then((games) => {
        console.log(games);
      });
  }

  return (
    <div className="GameSearch">
      <h1>Game Search</h1>
      <div className="mainSearch">
        <h3>Please search for a game below.</h3>
        <div className="searchForm">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="gameInput"
              placeholder="Enter Name Here"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            ></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GameSearch;
