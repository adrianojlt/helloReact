import React from 'react';

const Props = () => {
    return (
      <div>
        <div className="container">

          <div className="row">
            <h2 className="mt-3">Properties</h2>
            <p className="lead">
              Being a component-based library, the UI is divided into small,
              reusable pieces. These components might need to send data to each
              other in some scenarios, and passing data between the components
              is done by way of props. The term "props" stands for "properties"
              and is used for passing data from one component to another. As
              opposed to state in React, props are read-only. So, the data
              coming from a parent component can't be changed by the child
              component.
            </p>
          </div>

          <div className="row">

            <div className="card" style={{width: "18rem"}}>
              <img src="https://www.bypeople.com/wp-content/uploads/2020/03/react-rendering-image-particle-animation.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Animals example</h5>
                <p className="card-text">
                    See how props work with this custom cards components example with animal's information
                </p>
                <a href="#" className="btn btn-primary">
                  see example
                </a>
              </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
              <img src="https://www.bypeople.com/wp-content/uploads/2020/03/react-rendering-image-particle-animation.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Another Prop's example</h5>
                <p className="card-text">
                    Another example
                </p>
                <a href="#" className="btn btn-primary">
                  see example
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
}

export default Props