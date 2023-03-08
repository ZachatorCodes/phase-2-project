import React from "react";

function BuildDeal({ deal, stores }) {
  const dealStore = stores.find((store) => {
    return store.storeID === deal.storeID;
  });

  function visitDeal() {
    window.open(`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`, "_blank");
  }

  console.log(dealStore);

  if (dealStore.isActive === 1) {
    if (parseFloat(deal.savings) !== 0) {
      return (
        <div className="Deal" id={deal.dealID}>
          <h3>{dealStore.storeName}</h3>
          <img
            src={`https://www.cheapshark.com/${dealStore.images.logo}`}
            className="StoreImage"
          ></img>
          <p>Regular Price: ${deal.retailPrice}</p>
          <p>Sale Price: ${deal.price}</p>
          <p>
            Discount: $
            {(parseFloat(deal.retailPrice) - parseFloat(deal.price)).toFixed(2)}
          </p>
          <button onClick={visitDeal}>Visit Deal</button>
        </div>
      );
    }
  }
}

export default BuildDeal;
