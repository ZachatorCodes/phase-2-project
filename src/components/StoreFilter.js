import React from "react";

function StoreFilter({ sort, setSort }) {
  function handleSortChange(e) {
    setSort(e.target.checked);
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
      </form>
    </div>
  );
}

export default StoreFilter;
