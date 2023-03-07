import React from "react";

function BuildDeal({ deal, stores }) {
  const dealStore = stores.find(store => {
    return store.storeID === deal.storeID;
  });
  
  return (
    <div className="Deal">
      <h3>Deal</h3>
    </div>
  );
}

export default BuildDeal;
 