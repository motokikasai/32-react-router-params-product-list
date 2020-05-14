import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="item-detail">
        <div className="list-header">
          <button onClick={this.toHome} className="btn-back">
            {/* <img src={} alt="back-to-home-button" className="left-arrow-back" /> */}
          </button>
          <h1 className="list-title">??????</h1>
        </div>
      </div>
    );
  }
}
