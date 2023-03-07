import React from "react";

function BuildDeal({ deal, stores }) {
  const dealStore = stores.find((store) => {
    return store.storeID === deal.storeID;
  });
  console.log(dealStore);
  if (dealStore.isActive === 1) { 
    return (
      <div className="Deal" id={deal.dealID}>
        <h3>{dealStore.storeName}</h3>
        <img src={`https://www.cheapshark.com/${dealStore.images.logo}`} className="StoreImage"></img>
      </div>
    );
  }
}

export default BuildDeal;
