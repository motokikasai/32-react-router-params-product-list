import React from "react";
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

  getParamStr = (param) => {
    console.log("Data from Sort", param);

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
              <Route path="/products/:id" component={Item} />
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/products/"
                render={(props) => (
                  <Products {...props} paramGetter={this.getParamStr} />
                )}
              />
              <Route path={`/products${this.state.queryParam}`} component={Sort} />

              {/* <Route path="/products/" component={Products} /> */}
              <Route>Error: 404 Not Found</Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
