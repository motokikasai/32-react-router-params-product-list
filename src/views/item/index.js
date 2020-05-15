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
    const findOjb = data.find((item) => {
      return item.id === this.props.match.params.id;
    });

    this.setState({
      product: findOjb,
    });
  }

  render() {
    console.log(this.state.product);
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
      </div>
    );
  }
}
