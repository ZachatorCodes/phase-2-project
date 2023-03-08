import React, { useEffect, useState } from "react";
import StoreContainer from "./StoreContainer";
import StoreFilter from "./StoreFilter";

function Store({ stores, setStores }) {
  const [activeFilter, setActiveFilter] = useState(false);
  const [sort, setSort] = useState(false);
  const [store, setStore] = useState(null);

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
      <div className="Container">
        <StoreContainer stores={storesToDisplay} setDealStore={setStore}/>
      </div>
      
    </div>
  );
}

export default Store;
