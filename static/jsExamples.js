class Greetings extends React.Component {
    render() {
        return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
    }
}

class App extends React.Component {
    render() {
       return React.createElement('div', null, "App div");
    }
}

ReactDOM.render(
    React.createElement(Greetings, { name : 'Chris' }),
    document.getElementById('root')
);

const cities = ["Porto", "Lisboa", "Guimaraes", "Felgueiras", "Fafe", "Celorico de Basto"];

function ListOfCities({items}) {

    return React.createElement(
        "ul",
        { className: "cities" },
        items.map((city, i) => React.createElement("li", { className: "list", key: i }, city))
    );
}

const hi = React.createElement('h2', null, 'hi!!!');
const hello = React.createElement('h2', null, 'hello!!!');
const list = React.createElement(ListOfCities, {items: cities}, null);
const app = React.createElement(App);

ReactDOM.render(
    [hi, hello, list, app],
    document.getElementById('headings')
);


