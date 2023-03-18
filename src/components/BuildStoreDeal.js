import React from "react";

function BuildStoreDeal({ deal }) {
  function visitDeal() {
    window.open(
      `https://www.cheapshark.com/redirect?dealID=${deal.dealID}`,
      "_blank"
    );
  }

  if (parseFloat(deal.savings) !== 0) {
    return (
      <div className="BuildStoreDeal">
        <div className="Deal">
          <h1>{deal.title}</h1>
          <img src={deal.thumb}></img>
          <p>Regular Price: ${deal.normalPrice}</p>
          <p>Sale Price: ${deal.salePrice}</p>
          <p>
            Discount: $
            {(
              parseFloat(deal.normalPrice) - parseFloat(deal.salePrice)
            ).toFixed(2)}
          </p>
          <button onClick={visitDeal}>Visit Deal</button>
        </div>
      </div>
    );
  }
}

export default BuildStoreDeal;
