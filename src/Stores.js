import React, { useEffect, useState } from "react";

function Store() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/stores")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setStores(data);
      });
  }, []);

  return (
    <div className="Stores">
      <h1>Stores</h1>
    </div>
  );
}

export default Store;
