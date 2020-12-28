import React, {Component} from 'react';

function Welcome(props) {
    return <h2>{props.name}</h2>
}

const first = <Welcome name="Start with React" />

class Start extends Component {

    constructor(props) {
        super(props);

        this.state = {
            x: "x from state",
            y: "y from state",
            name: "Adams"
        }
    }

    changeStateData = () => {
        this.setState({name: this.state.name === "Adams" ? "Bob" : "Adams"})
    }

    render() {
        let x1 = this.state.x;
        let y1 = this.state.y;
        return (
            <div>
                <div>
                    {first}
                    <div>{x1}</div>
                    <div>{y1}</div>
                </div>
                <div>
                    <h4 className="bg-primary text-white text-center p-2">
                        { this.state.name } List's
                    </h4>
                    <button className="btn btn-primary m-2" onClick={this.changeStateData}>Change</button>
                </div>
            </div>
        );
    }
}

export default Start;