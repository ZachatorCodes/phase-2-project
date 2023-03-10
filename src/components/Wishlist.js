import React, { useEffect } from "react";
import BuildWishlistApp from "./BuildWishlistApp";

function Wishlist({ wishlist, setWishlist }) {
  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((r) => r.json())
      .then((data) => {
        setWishlist(data);
      });
  }, [wishlist]);

  return (
    <div className="Wishlist">
      <h1>Wishlist</h1>
      <div className="Deals">
        {wishlist.map((game, index) => {
          return <BuildWishlistApp game={game} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Wishlist;
