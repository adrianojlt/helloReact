function Link() {
    return (
        <div>
            <a href="https://reactjs.org">
                React
            </a>
        </div>
    );
}

function LinkApp() {
    return (
        <section>
            <Link />
        </section>
    );
}

var samples = document.getElementById("samples");

ReactDOM.render([<hr />, <LinkApp />], samples)