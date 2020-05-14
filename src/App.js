import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Products from "./views/products";
import Item from "./views/item";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/products/" component={Products} />
              <Route path="/products/:id" component={Item} />
              <Route>Error: 404 Not Found</Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
