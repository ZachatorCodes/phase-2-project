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
        to="/search"
        className="linkStyles"
        activeClassName="activeLinkStyles"
      >
        Game Search
      </NavLink>
      <NavLink
        exact
        to="/stores"
        className="linkStyles"
        activeClassName="activeLinkStyles"
      >
        Stores
      </NavLink>
      <NavLink
        exact
        to="/favorites"
        className="linkStyles"
        activeClassName="activeLinkStyles"
      >
        Favorites
      </NavLink>
      {/* <NavLink exact to="/textcounter" className="linkStyles" activeClassName="activeLinkStyles" >
        Text Counter
      </NavLink> */}
    </div>
  );
}

export default Navigation;
