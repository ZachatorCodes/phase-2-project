import React from "react";

function GameSearch({ search, setSearch, setGames }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("SUBMITTED:", search);
    setSearch("");
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${search}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      });
  }

  return (
    <div className="GameSearch">
      <h1 className="searchTitle">Game Search</h1>
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
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GameSearch;
