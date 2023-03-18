import React from "react";

function BuildWishlistApp({ name, image }) {
  return (
    <div className="Deal">
      <h1>{name}</h1>
      <img src={image}></img>
    </div>
  );
}

export default BuildWishlistApp;