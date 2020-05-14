import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "./views/products";

class App extends React.Component {
  goHome = () => {
    console.log("clicked...");

    // this.props.history.push({
    //   pathname: "/products",
    //   search: "/",
    // });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <div className="home-content">
                  <h1>Welcome, visitor!</h1>
                  <button className="btn-go" onClick={this.goHome}>
                    Go to Products
                  </button>
                </div>
              </Route>
              <Route path="/products" component={Products} />

              <Route>Error: 404 Not Found</Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
