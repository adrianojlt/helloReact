import React from "react";

const Jsx = () => {
  const title = "JSX - Javascript Syntax eXtension";

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mt-3">{title}</h2>
          <p className="lead">
            JSX is an XML/HTML-like syntax used by React that extends ECMAScript
            so that XML/HTML like text can co-exist with JavaScript/React code.
            The syntax is intended to be used by preprocessors (i.e.,
            transpilers like Babel) to transform HTML-like text found in
            JavaScript files into standard JavaScript objects that a JavaScript
            engine will parse.
          </p>
        </div>
        <div class="row">
          {//<p className="lead">second row</p>
          }
        </div>
      </div>
    </>
  );
};

export default Jsx;
