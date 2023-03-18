import React from "react";

function BuildFavorite({ name, image }) {
  return (
    <div className="Deal">
      <h1>{name}</h1>
      <img src={image}></img>
    </div>
  );
}

export default BuildFavorite;
