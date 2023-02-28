import React, {useState} from "react";

function GameSearch() {
  const [search, setSearch] = useState("");

  function handleSearchChange(e) {
    console.log(e.target.value)
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefaut();
    console.log(search);
  }

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
              onChange={handleSearchChange}
              value={search}
            ></input>
            <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GameSearch;
