import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.image} className="card-img-top" alt="" />

        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>

          <p className="card-text">{this.props.description}</p>

          <Link to={this.props.path} className="btn btn-primary">
            See Example
          </Link>
        </div>
      </div>
    );
  }
}

const Props = () => {
  const cards = [
    {
      id: 1,
      title: "Animals example",
      description:
        "See how props work with this custom cards components example with animal's information",
      path: "/react/props/animal",
      image:
        "https://www.bypeople.com/wp-content/uploads/2020/03/react-rendering-image-particle-animation.png",
    },
    {
      id: 2,
      title: "Example from FullStack react book",
      description:
        "See how props work with this custom cards components example with products information",
      path: "/react/props/animal",
      image:
        "https://image.slidesharecdn.com/fullstack-react-the-complete-guide-to-reactjs-and-friends-190412162055/95/fullstack-react-the-complete-guide-to-reactjs-and-friends-1-638.jpg?cb=1555086068",
    }
  ];

  const cardComponents = cards.map((card) => (
    <Card
      key={'card-' + card.id}
      id={card.id}
      title={card.title}
      description={card.description}
      path={card.path}
      image={card.image}
    />
  ));

  const Li = props => <li {...props}>{props.children}</li>

  return (
    <div className="container">

      <div className="row">

        <h2 className="mt-3">Properties</h2>

        <p className="lead">
          Being a component-based library, the UI is divided into small,
          reusable pieces. These components might need to send data to each
          other in some scenarios, and passing data between the components is
          done by way of props. The term "props" stands for "properties" and is
          used for passing data from one component to another. As opposed to
          state in React, props are read-only. So, the data coming from a parent
          component can't be changed by the child component.
        </p>

      </div>

      <div className="row">

        {cardComponents}

      </div>

      <div className="row">
        <ul>
          <Li color={'red'}>Never give you up</Li>
        </ul>
      </div>

    </div>
  );
};

export default Props;
