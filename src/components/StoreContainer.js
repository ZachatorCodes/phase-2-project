import React from "react";
import BuildStore from "./BuildStore";

function StoreContainer({ stores, setDealStore }) {
  return (
    <div className="StoreContainer">
      {stores.map((store, index) => {
        return <BuildStore store={store} key={index} setDealStore={setDealStore}/>;
      })}
    </div>
  );
}

export default StoreContainer;