import React, { useState, useEffect } from "react";
import BuildDeal from "./BuildDeal";

function GameDeal({ gameID }) {
  const [cheapestPrice, setCheapestPrice] = useState(null);
  const [info, setInfo] = useState(null);
  const [deals, setDeals] = useState(null);

  useEffect(() => {
    if (gameID !== null) {
      fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameID}`)
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          setCheapestPrice(data.cheapestPriceEver.price);
          setInfo(data.info);
          setDeals(data.deals);
        });
    }
  }, [gameID]);

  return (
    <div className="GameDeal">
      <div className="GameDealInfo">
        {info !== null ? (
          <div>
            <h1>{info.title}</h1>
          </div>
        ) : null}
        {cheapestPrice !== null ? (
          <h3>Cheapest Price Ever: {cheapestPrice}</h3>
        ) : null}
      </div>
      <div className="Deals">
        {deals !== null
          ? deals.map((deal, index) => {
              return <BuildDeal deal={deal} key={index} />;
            })
          : null}
      </div>
    </div>
  );
}

export default GameDeal;
