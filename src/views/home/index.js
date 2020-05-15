import React, { Component } from "react";
import data from "../../data/products.json";

export default class Home extends Component {
  toProducts = () => {
    this.props.history.push("/products");
  };

  render() {
    return (
      <>
        <div className="home-content">
          <h1>Welcome, visitor!</h1>
          <button className="btn-go" onClick={this.toProducts}>
            Go to Products
          </button>
        </div>
        <ul className="cards">
          {data.map((item) => {
            return (
              <li className="card" key={item.id}>
                {item.price}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
