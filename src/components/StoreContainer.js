import React from "react";
import BuildStore from "./BuildStore";

function StoreContainer({ stores }) {
  return (
    <div className="StoreContainer">
      {stores.map((store, index) => {
        return <BuildStore store={store} key={index} />;
      })}
    </div>
  );
}

export default StoreContainer;