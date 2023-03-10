import React, { useEffect } from "react";

function Wishlist({ wishlist }) {
  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, [wishlist]);

  return (
    <div className="Wishlist">
      <h1>Wishlist</h1>
    </div>
  );
}

export default Wishlist;
