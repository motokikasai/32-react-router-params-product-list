import React, { Component } from "react";
import data from "../../data/products.json";
import { Link } from "react-router-dom";
import beach from "../../beach.mp4";

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
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={beach} type="video/mp4" />
          </video>
        </div>
        <div className="home-content">
          <h1>Welcome, visitor!</h1>
          <button className="btn-go" onClick={this.toProducts}>
            Go to Products
          </button>
        </div>
        <ul className="cards">
          {this.state.arrFour.map((item) => {
            return (
              <Link to={`/products/${item.id}`} key={item.id}>
                <li className="card">
                  {item.name}
                  <div className="price-tag">{`${new Intl.NumberFormat(
                    "de-DE",
                    {
                      style: "currency",
                      currency: "EUR",
                    }
                  ).format(item.price)}`}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </>
    );
  }
}
