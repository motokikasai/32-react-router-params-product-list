import React, { Component } from "react";
import backHomeIcon from "../../pointing-left.png";
import data from "../../data/products.json";

export default class Item extends Component {
  state = {
    product: {},
  };

  toPrev = () => {
    this.props.history.push("/products");
  };

  componentDidMount() {
    const objData = data.find((item) => {
      return item.id === this.props.match.params.id;
    });

    this.setState({
      product: objData,
    });
  }

  render() {
    return (
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

        <img
          src={this.state.product.image}
          alt="product"
          className="product-image"
        />
        <div className="text-wrapper">{this.state.product.description}</div>
        <p className="price">
          {`${new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(this.state.product.price)}`}
        </p>
      </div>
    );
  }
}
