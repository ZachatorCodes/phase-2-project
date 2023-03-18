import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import GameSearch from "./GameSearch";
import Stores from "./Stores";
import Favorites from "./Favorites";
import { Route, Switch } from "react-router-dom";

function App() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/stores")
      .then((r) => r.json())
      .then((data) => {
        setStores(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/search">
          <GameSearch stores={stores} />
        </Route>
        <Route exact path="/stores">
          <Stores stores={stores} />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
