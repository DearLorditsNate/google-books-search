import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4 pt-5 mt-5">{props.name} Books</h1>
      </div>
    </div>
  );
}

export default Jumbotron;