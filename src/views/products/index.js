import React, { Component } from "react";
import backHomeIcon from "../../pointing-left.png";
import data from "../../data/products.json";
import { Link } from "react-router-dom";

export default class Products extends Component {
  state = {
    param: "",
  };

  toHome = () => {
    this.props.history.push("/");
  };

  // HANDLE SORT
  sortHandler = (e) => {
    const searchParams = `?sort=${e.target.name}`;

    this.setState({
      param: searchParams,
    });

    // console.log(this.state.param);
  };

  componentDidUpdate(prevState) {
    if (prevState.location.pathname !== `/products${this.state.param}`) {
      this.props.history.replace({
        pathname: `/products${this.state.param}`,
      });
    }

    this.props.paramGetter(this.state.param);
  }

  // resetHandler = () => {
  //   this.props.history.replace({
  //     pathname: "/products",
  //   });
  // };

  render() {
    return (
      <div className="products-list">
        <div className="sort-buttons">
          <Link to="/products">
            <button
              name="reset"
              // onClick={this.resetHandler}
              className="sort reset"
            >
              Reset
            </button>
          </Link>
          <button name="asc" onClick={this.sortHandler} className="sort asc">
            Sort &#8657;
          </button>
          <button name="dsc" onClick={this.sortHandler} className="sort desc">
            Sort &#8659;
          </button>
        </div>

        <div className="list-header">
          <button onClick={this.toHome} className="btn-back">
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
            return (
              <Link key={item.id} to={`/products/${item.id}`}>
                <li>
                  <span className="table-item-name">{item.name}</span>
                  <span className="table-item-desc">
                    {item.shortDescription}
                  </span>
                  <span className="table-item-price">{`${new Intl.NumberFormat(
                    "de-DE",
                    { style: "currency", currency: "EUR" }
                  ).format(item.price)}`}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
