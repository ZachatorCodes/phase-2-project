import React, { useEffect, useState } from "react";
import BuildFavorite from "./BuildFavorite";
import Form from "./Form";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/games")
      .then((r) => r.json())
      .then((data) => {
        setFavorites(data);
      });
  }, []);

  function handleAddGame(newGame) {
    const updatedFavs = [...favorites, newGame];
    setFavorites(updatedFavs);
  }

  return (
    <div className="Favorites">
      <h1>Favorite Games</h1>
      <div>
        <Form onAddGame={handleAddGame} />
      </div>
      <div className="Deals">
        {favorites.map((game, index) => {
          return (
            <BuildFavorite name={game.title} image={game.image} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
