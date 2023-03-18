import React, { useEffect, useState } from "react";
import BuildStoreDeal from "./BuildStoreDeal";

function StoreDeals({ storeID }) {
  const [listOfDeals, setListOfDeals] = useState(null);

  useEffect(() => {
    if (storeID !== null) {
      fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}`)
        .then((r) => r.json())
        .then((data) => {
          setListOfDeals(data);
        });
    }
  }, [storeID]);

  return (
    <div className="StoreDeals">
      <div className="Deals">
        {listOfDeals !== null
          ? listOfDeals.map((deal, index) => {
              return <BuildStoreDeal key={index} deal={deal} />;
            })
          : null}
      </div>
    </div>
  );
}

export default StoreDeals;
