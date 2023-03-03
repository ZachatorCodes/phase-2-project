import React, { useEffect, useState } from "react";
import StoreContainer from "./StoreContainer";
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

  const filteredStores = stores.filter((store) =>
    activeFilter ? store.isActive === 1 : true
  );

  const storesToDisplay = sort
    ? filteredStores.sort((store1, store2) => {
        return store1.storeName.localeCompare(store2.storeName);
      })
    : filteredStores;

  return (
    <div className="Stores">
      <h1>Stores</h1>
      <StoreFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        sort={sort}
        setSort={setSort}
      />
      <StoreContainer stores={storesToDisplay} />
    </div>
  );
}

export default Store;
