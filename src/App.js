import React from "react";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import GameSearch from "./GameSearch";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/gamesearch">
          <GameSearch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
