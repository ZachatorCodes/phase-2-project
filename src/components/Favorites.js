import React, { useEffect, useState } from "react";
import BuildFavorite from "./BuildFavorite";
import Form from "./Form";

function Favorites({ favorites }) {
  const [wishlistToDisplay, setWishlistToDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((r) => r.json())
      .then((data) => {
        setWishlistToDisplay(data);
      });
  }, [favorites]);

  return (
    <div className="Favorites">
      <h1>Favorite</h1>
      <div>
        <Form />
      </div>
      <div className="Deals">
        {wishlistToDisplay.map((game, index) => {
          return <BuildFavorite name={game.title} image={game.image} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Favorites;
