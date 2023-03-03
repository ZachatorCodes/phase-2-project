import React, { useEffect, useState } from "react";
import StoreFilter from "./StoreFilter";

function Store() {
  const [stores, setStores] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/stores")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setStores(data);
      });
  }, []);

  return (
    <div className="Stores">
      <h1>Stores</h1>
      <StoreFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
}

export default Store;
