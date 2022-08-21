import React, { Component } from "react";

class Home extends Component {
  render() {
    const title = "Hello React JS - My examples with the Facebook Library React JS";

    return (
      <>
        <div className="container">
          <div className="row">
            <h2 className="mt-3">{title}</h2>
            <p className="lead">
                Here is where i will collect my Facebook Library React JS examples 
                while training or testing something new.
            </p>
          </div>
          <div class="row">
            {
              //<p className="lead">second row</p>
            }
          </div>
        </div>
      </>
    );
  }
}

export default Home;
