import React from "react";

function BuildStore({ store }) {
  return (
    <div className="StoreCard">
      <h1>{store.storeName}</h1>
    </div>
  );
}

export default BuildStore;
