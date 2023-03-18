import React, { useState } from "react";

function Form({ onAddGame }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const gameData = {
      title: name,
      image: image,
    };
    fetch("http://localhost:4000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
    })
      .then((r) => r.json())
      .then((data) => onAddGame(data));
  }

  return (
    <div className="Form" onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Game Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          image="image"
          placeholder="Game Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
}

export default Form;
