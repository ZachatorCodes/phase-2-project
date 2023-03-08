import React from "react";

function BuildStoreDeal({ deal }) {
  return (
    <div className="BuildStoreDeal">
      <div className="Deal">
        <h1>{deal.title}</h1>
        <img src={deal.thumb}></img>
        <p>Regular Price: ${deal.normalPrice}</p>
        <p>Sale Price: ${deal.salePrice}</p>
        <p>
          Discount: $
          {(parseFloat(deal.normalPrice) - parseFloat(deal.salePrice)).toFixed(
            2
          )}
        </p>
      </div>
    </div>
  );
}

export default BuildStoreDeal;
