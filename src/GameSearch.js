import React from "react";

function GameSearch() {
  return (
    <div className="GameSearch">
      <h1>Game Search</h1>
      <div className="mainSearch">
        <h3>Please search for a game below.</h3>
        <div className="searchForm">
          <form>
            <input
              type="text"
              className="gameInput"
              placeholder="Enter Name Here"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GameSearch;
