import React, { useEffect, useState } from "react";

function StoreDeals({ storeID }) {
  const [listOfDeals, setListOfDeals] = useState(null);
  
  return (
    <div className="StoreDeals">
      <h1>StoreDeals</h1>
      <h1>{storeID}</h1>
      <div className="Deals">
        
      </div>
    </div>
  );
}

export default StoreDeals;
