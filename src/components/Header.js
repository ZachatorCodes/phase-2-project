import React from "react";
import bunkface from "/home/zachator/Development/code/phase-2/phase-2-project/src/bunkface.png";

function Header() {
  return (
    <div className="Header">
      <h1 className="HeaderText">Bunk</h1>
      <div className="BunkFace">
        <img src={bunkface} className="BunkImage" alt="Bunk The Cat" />
      </div>
      <h1 className="HeaderText">Sales</h1>
    </div>
  );
}

export default Header;
