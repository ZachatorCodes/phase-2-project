import React, { useState } from "react";

function TextCounter() {
  const [letterCounter, setLetterCounter] = useState(0);
  const [word, setWord] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const wordLength = word.length;
    setLetterCounter(letterCounter => letterCounter + wordLength);
    setWord("");
  }

  return (
    <div className="TextCounter">
      <h1>TextCounter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Word Here"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button type="submit">Click Me</button>
      </form>
      <p>{letterCounter}</p>
    </div>
  );
}

export default TextCounter;
