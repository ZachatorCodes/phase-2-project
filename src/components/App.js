import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import GameContainer from "./GameContainer";
import Store from "./Stores";
import Wishlist from "./Wishlist";
import Form from "./Form";
import { Route, Switch } from "react-router-dom";

function App() {
  const [stores, setStores] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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
          <GameContainer stores={stores} setWishlist={setWishlist}/>
        </Route>
        <Route exact path="/stores">
          <Store stores={stores} setStores={setStores} />
        </Route>
        <Route exact path="/favorites">
          <Wishlist wishlist={wishlist} />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
