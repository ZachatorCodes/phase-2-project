import React, { useEffect, useState } from "react";

function StoreDeals({ storeID }) {
  const [listOfDeals, setListOfDeals] = useState(null);
  useEffect(() => {
    if (storeID !== null) {
      fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}`)
        .then(r => r.json())
        .then(data => {
          console.log(data);
          setListOfDeals(data);
        })
    }
  }, [storeID]);
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
