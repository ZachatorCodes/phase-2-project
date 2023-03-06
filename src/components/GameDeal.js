import React, { useState, useEffect } from "react";

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
            <h1>Title: {info.title}</h1>
            <img src={info.thumb} />
          </div>
        ) : null}
        {cheapestPrice !== null ? (
          <h1>Cheapest Price Ever: {cheapestPrice}</h1>
        ) : null}
      </div>
    </div>
  );
}

export default GameDeal;
