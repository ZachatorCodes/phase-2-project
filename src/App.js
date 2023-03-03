import React from "react";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import GameContainer from "./GameContainer";
import Store from "./Stores";
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
        <Route exact path="/search">
          <GameContainer />
        </Route>
        <Route exact path="/stores">
          <Store />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
