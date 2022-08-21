import React, { Component } from "react";

class Start extends Component {
  render() {
    return (
      <div className="container-md">
        <div className="text-center">
          <h2 className="mt-3">Bootstrap</h2>
          <p className="lead">Component with some Bootstrap examples</p>
        </div>
        <div className="row">
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    );
  }
}

export default Start;
