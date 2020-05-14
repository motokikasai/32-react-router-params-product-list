import React, { Component } from "react";
import backHomeIcon from "../../pointing-left.png";
import data from "../../data/products.json";

export default class Products extends Component {
  render() {
    return (
      <div className="products-list">
        <div className="list-header">
          <button className="btn-back">
            <img
              src={backHomeIcon}
              alt="back-to-home-button"
              className="left-arrow-back"
            />
          </button>
          <h1 className="list-title">Products List</h1>
        </div>
        <ul className="list-items">
          <li className="list-categories">
            <span className="table-item-name">Name</span>
            <span className="table-item-desc">Description</span>
            <span className="table-item-price">Price</span>
          </li>
          {data.map((item) => {
            console.log(item.id);

            return (
              <li key={item.id}>
                <span className="table-item-name">{item.name}</span>
                <span className="table-item-desc">{item.shortDescription}</span>
                <span className="table-item-price">{`${new Intl.NumberFormat(
                  "de-DE",
                  { style: "currency", currency: "EUR" }
                ).format(item.price)}`}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// T0b1Faku1saW3bM31st3r
