import React, { useState } from "react";

const State = () => {
  const title = "State";

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-3">{title}</h2>
        <p className="lead">
          The heart of every React component is its “state”, an object that
          determines how that component renders & behaves. In other words,
          “state” is what allows you to create components that are dynamic and
          interactive.
        </p>
      </div>
      <div className="row">
        <div className="col-sm">{InputElement()}</div>
        <div className="col-sm">{cenas()}</div>
        <div className="col-sm">{cenas()}</div>
      </div>
    </div>
  );
};

function cenas() {
  return <div>example placeholder</div>;
}

const InputElement = () => {
  const results = useState("");
  const inputText = results[0];
  const setInputText = results[1];

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="input some text"
      />
      <p>{inputText}</p>
    </div>
  );
};

export default State;
