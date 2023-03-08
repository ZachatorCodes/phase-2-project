import React from "react";

function BuildDeal({ deal, stores }) {
  const dealStore = stores.find((store) => {
    return store.storeID === deal.storeID;
  });
  console.log(dealStore);
  if (dealStore.isActive === 1) {
    if (parseFloat(deal.savings) !== 0) {
      return (
        <div className="Deal" id={deal.dealID}>
          <h3>{dealStore.storeName}</h3>
          <img src={`https://www.cheapshark.com/${dealStore.images.logo}`} className="StoreImage"></img>
          <p>Regular Price: ${deal.retailPrice}</p>
          <p>Sale Price: ${deal.price}</p>
          <p>Discount: ${(parseFloat(deal.retailPrice) - parseFloat(deal.price)).toFixed(2)}</p>
        </div>
      );
    } 
  }
}

export default BuildDeal;
