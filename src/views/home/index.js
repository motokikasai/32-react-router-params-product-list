import React, { Component } from "react";

export default class Home extends Component {
  toProducts = () => {
    this.props.history.push("/products");
  };

  render() {
    return (
      <div className="home-content">
        <h1>Welcome, visitor!</h1>
        <button className="btn-go" onClick={this.toProducts}>
          Go to Products
        </button>
      </div>
    );
  }
}
