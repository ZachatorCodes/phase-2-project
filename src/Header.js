import React from "react";
import bunk from "./bunkface.png";

function Header() {
  return (
    <div className="Header">
      <h1 className="HeaderText">Bunk</h1>
      <div className="bunkSpin">
        <img src={bunk} className="bunkImage" alt="Bunk The Cat" />
      </div>
      <h1 className="HeaderText">Sales</h1>
    </div>
  );
}

export default Header;