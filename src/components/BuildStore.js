import React from "react";

function BuildStore({ store, setDealStore }) {
  function handleStoreChange() {
    setDealStore(store.storeID);
  }
  return (
    <div className="StoreCard">
      <h1>{store.storeName}</h1>
      <img
        className="StoreImage"
        src={`https://www.cheapshark.com/${store.images.logo}`}
        alt={store.storeName}
      ></img>
      <button onClick={handleStoreChange}>See Deals</button>
    </div>
  );
}

export default BuildStore;
