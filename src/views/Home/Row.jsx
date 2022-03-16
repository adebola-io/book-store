import React from "react";

const Row = (props) => {
  return (
    <section className="row-of-books">
      <h1>{props.heading}</h1>
      <div className="row-of-books-container"></div>
    </section>
  );
};

export default Row;
