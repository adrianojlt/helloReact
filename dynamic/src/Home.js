import React, {Component} from 'react';

class Cenas extends Component {
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}

class Home extends Component {

    render() {

        return (
            <div>
                <p>Home</p>
                <Cenas title={"cenas 01"} />
                <Cenas title={"cenas 02"} />
                <p>dsfadsfjdsfjlkdsfjldksjflkdjlkajfkdj</p>
                <p>dsfadsfjdsfjlkdsfjldksjflkdjlkajfkdj</p>
                <p>dsfadsfjdsfjlkdsfjldksjflkdjlkajfkdj</p>
                <p>dsfadsfjdsfjlkdsfjldksjflkdjlkajfkdj</p>
                <p>dsfadsfjdsfjlkdsfjldksjflkdjlkajfkdj</p>
                <p>dsfadsfjdsfjlkdsfjldksjflkdjlkajfkdj</p>
                {jsx}
            </div>
        );
    }
}

const jsx = (
    <div>
        <Cenas />
    </div>
);

export default Home;