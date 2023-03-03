import React from "react";

function StoreFilter() {
  return (
    <div className="StoreFilter">
      <h1>Store Filter</h1>
      <form>
        <label htmlFor="sort">
          Sort Alphabetically
          <input type="checkbox" id="sort"></input>
        </label>
        <label htmlFor="filter">
          Filter Active
          <input type="checkbox" id="filter"></input>
        </label>
      </form>
    </div>
  );
}

export default StoreFilter;
