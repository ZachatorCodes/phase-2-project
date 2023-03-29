import React, { useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import GameSearch from "./GameSearch";
import Stores from "./Stores";
import Favorites from "./Favorites";
import TextCounter from "./TextCounter";
import { Route, Switch } from "react-router-dom";

function App() {

  /**
   * Add a controlled form that includes:
A text input
A button with the text of “Click Me!”
A paragraph that has a counter that starts at 0
When you input text in the text field and submit it, the text input should reset. 
At the same time the counter should increment based on the word length.
The counter will continue to increment based on word length and will never reset back to zero.
*/
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
        {/* <Route exact path="/textcounter">
          <TextCounter />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
