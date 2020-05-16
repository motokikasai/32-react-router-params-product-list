import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import backHomeIcon from "../../pointing-left.png";
import data from "../../data/products.json";

export default class Item extends Component {
  state = {
    product: {},
    hidePrev: false,
    hideNext: false,
  };

  toPrev = () => {
    this.props.history.goBack(-1);
  };

  componentDidMount() {
    const objData = data.find((item) => {
      return item.id === this.props.match.params.id;
    });

    if (objData) {
      this.setState({
        product: objData,
      });
    } else {
      this.setState({
        product: null,
      });
    }
  }

  nextHandler = () => {
    if (data.indexOf(this.state.product) !== data.length - 1) {
      this.setState({
        product: data[data.indexOf(this.state.product) + 1],
        hidePrev: false,
      });
    }

    if (data.indexOf(this.state.product) === data.length - 2) {
      this.setState({
        hideNext: true,
      });
    }
  };

  prevHandler = () => {
    if (data.indexOf(this.state.product) !== 0) {
      this.setState({
        product: data[data.indexOf(this.state.product) - 1],
        hideNext: false,
      });
    }

    if (data.indexOf(this.state.product) === 1) {
      this.setState({
        hidePrev: true,
      });
    }
  };

  render() {
    return (
      <BrowserRouter>
        {this.state.product ? (
          <div className="item-detail">
            <div className="list-header">
              <button onClick={this.toPrev} className="btn-back">
                <img
                  src={backHomeIcon}
                  alt="back-to-home-button"
                  className="left-arrow-back"
                />
              </button>
              <h1 className="list-title">{this.state.product.name}</h1>
            </div>

            <div className="main-content">
              <img
                src={this.state.product.image}
                alt="product"
                className="product-image"
              />
              <div className="text-wrapper">
                {this.state.product.description}
              </div>
              <p className="price">
                {`${new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(this.state.product.price)}`}
              </p>
            </div>
            <div className="nav-back-forth">
              <div className="cycler">
                {!this.state.hidePrev && (
                  <button onClick={this.prevHandler} id="prev" className="prev">
                    &#8617; Prev
                  </button>
                )}
              </div>
              <div className="cycler">
                {!this.state.hideNext && (
                  <button onClick={this.nextHandler} id="next" className="next">
                    Next &#8618;
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <Route>Error: 404 Not Found</Route>
        )}
      </BrowserRouter>
    );
  }
}
