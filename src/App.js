import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./views/home";
import Products from "./views/products";
import Item from "./views/item";
import Sort from "./views/sort";

class App extends React.Component {
  state = {
    queryParam: "",
  };

  getSortQueryParam = (param) => {
    this.setState({
      queryParam: param,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to="/">
              <img src={logo} className="logo" alt="logo" />
            </Link>
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route
                exact
                path="/products/"
                render={(props) => (
                  <Products {...props} paramGetter={this.getSortQueryParam} />
                )}
                paramGetter={this.getSortQueryParam}
              />
              <Route path="/products/:id" component={Item} />
              <Route
                path={`/products${this.state.queryParam}`}
                component={Sort}
              />
              <Route>Error: 404 Not Found</Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
