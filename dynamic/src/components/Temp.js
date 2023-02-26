import React, {Component} from 'react';

class Cenas extends Component {
    render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}


const Temp = () => {

    return (

        <div>

            <div className="row">
                <h2>Temp</h2>
            </div>

            <div className="">
                <p>Home</p>
                <Cenas title={"cenas 01"} />
                <Cenas title={"cenas 02"} />
                <Cenas title={"cenas 03"} />
                {jsx}
            </div>

        </div>
    );
};

const jsx = (
    <div>
        <Cenas title={"cenas jsx"}/>
    </div>
);

export default Temp;