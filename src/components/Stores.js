import React, { useState } from "react";
import StoreContainer from "./StoreContainer";
import StoreDeals from "./StoreDeals";
import StoreFilter from "./StoreFilter";

function Store({ stores }) {
  const [sort, setSort] = useState(false);
  const [store, setStore] = useState(null);

  const filteredStores = stores.filter((store) => store.isActive === 1);

  const storesToDisplay = sort
    ? filteredStores.sort((store1, store2) => {
        return store1.storeName.localeCompare(store2.storeName);
      })
    : filteredStores;

  return (
    <div className="Stores">
      <h1>Stores</h1>
      <StoreFilter sort={sort} setSort={setSort} />
      <div className="Container">
        <StoreContainer stores={storesToDisplay} setDealStore={setStore} />
        <StoreDeals storeID={store} stores={stores} />
      </div>
    </div>
  );
}

export default Store;
