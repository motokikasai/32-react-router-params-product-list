import React, { Component } from "react";
import data from "../../data/products.json";

export default class Home extends Component {
  state = {
    arrFour: [],
  };

  toProducts = () => {
    this.props.history.push("/products");
  };

  componentDidMount() {
    const arrSorted = data.sort((a, b) => {
      return b.price - a.price;
    });

    let arrOfFour = arrSorted.slice(0, 4);
    this.setState({
      arrFour: arrOfFour,
    });
    // console.log(arrOfFour);
    // this.arrOfFour = arrOfFour;
  }

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
          {this.state.arrFour.map((item) => {
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
