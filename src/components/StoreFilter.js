import React from "react";

function StoreFilter({ activeFilter, setActiveFilter, sort, setSort }) {
  function handleSortChange(e) {
    setSort(e.target.checked);
  }

  function handleFilterChange(e) {
    setActiveFilter(e.target.checked);
  }

  return (
    <div className="StoreFilter">
      <form>
        <label htmlFor="sort">
          Sort Alphabetically
          <input
            type="checkbox"
            id="sort"
            onChange={handleSortChange}
            value={sort}
          ></input>
        </label>
        <br />
        <label htmlFor="filter">
          Filter Active
          <input
            type="checkbox"
            id="filter"
            onChange={handleFilterChange}
            value={activeFilter}
          ></input>
        </label>
      </form>
    </div>
  );
}

export default StoreFilter;
