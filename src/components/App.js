import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import GameContainer from "./GameContainer";
import Store from "./Stores";
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <GameContainer />
        </Route>
        <Route exact path="/stores">
          <Store stores={stores} setStores={setStores} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
