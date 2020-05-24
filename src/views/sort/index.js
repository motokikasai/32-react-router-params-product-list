import React, { Component } from "react";
import backHomeIcon from "../../pointing-left.png";
import data from "../../data/products.json";
import { Link } from "react-router-dom";

export default class Products extends Component {
  state = {
    sortedData: [],
    defaultData: [...data],
  };

  toHome = () => {
    this.props.history.push("/");
  };

  // HANDLE SORT
  componentDidMount() {
    console.log(this.state.defaultData);

    if (this.props.location.pathname === "/products?sort=asc") {
      const sortByAsc = this.state.defaultData.sort((a, b) => a.price - b.price)
      this.setState({
        sortedData: sortByAsc,
      });
    } else if (this.props.location.pathname === "/products?sort=dsc") {
      const sortByDsc = this.state.defaultData.sort((a, b) => b.price - a.price)
      this.setState({
        sortedData: sortByDsc,
      });
    }
  }

  sortHandler = (e) => {
    const searchParams = `?sort=${e.target.name}`;

    this.props.history.replace({
      pathname: `/products?sort=${e.target.name}`,
    });

    if (searchParams === "?sort=asc") {
      const sortByAsc = this.state.defaultData.sort((a, b) => a.price - b.price)
      this.setState({
        sortedData: sortByAsc,
      });
    } else if (searchParams === "?sort=dsc") {
      const sortByAsc = this.state.defaultData.sort((a, b) => b.price - a.price)
      this.setState({
        sortedData: sortByAsc,
      });
    } else if (searchParams === "?sort=reset") {
      // this.setState({
      //   sortedData: this.state.defaultData,
      // });

      this.props.history.replace({
        pathname: "/products",
      });
    }

  };

  render() {
    return (
      <div className="products-list">
        <div className="sort-buttons">
          <button
            name="reset"
            onClick={this.sortHandler}
            className="sort reset"
          >
            Reset
          </button>
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
          {this.state.sortedData.map((item) => {
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
