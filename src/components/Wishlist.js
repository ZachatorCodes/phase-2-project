import React, { useEffect, useState } from "react";
import BuildWishlistApp from "./BuildWishlistApp";

function Wishlist({ wishlist }) {
  const [wishlistToDisplay, setWishlistToDisplay] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((r) => r.json())
      .then((data) => {
        setWishlistToDisplay(data);
      });
  }, [wishlist]);

  return (
    <div className="Wishlist">
      <h1>Wishlist</h1>
      <div className="Deals">
        {wishlistToDisplay.map((game, index) => {
          return <BuildWishlistApp game={game} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Wishlist;
