class Greetings extends React.Component {
    render() {
        return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
    }
}

ReactDOM.render(
    React.createElement(Greetings, { name : 'Chris' }),
    document.getElementById('root')
);

ReactDOM.render(
    React.createElement('h1', null, 'hello!!!!'),
    document.getElementById('test')
);