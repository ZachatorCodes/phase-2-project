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
      ></img>
      <p>{store.isActive === 1 ? "ACTIVE" : "NOT ACTIVE"}</p>
      <button onClick={handleStoreChange}>See Deals</button>
    </div>
  );
}

export default BuildStore;
