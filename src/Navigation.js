import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <NavLink exact to="/">
        Home
      </NavLink>
    </div>
  );
}

export default Navigation;
