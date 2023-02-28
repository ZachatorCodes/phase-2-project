import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <NavLink
        exact
        to="/"
        className="linkStyles"
        activeClassName="activeLinkStyles"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/gamesearch"
        className="linkStyles"
        activeClassName="activeLinkStyles"
      >
        Game Search
      </NavLink>
    </div>
  );
}

export default Navigation;
