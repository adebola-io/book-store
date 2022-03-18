import React from "react";
import PropTypes from "prop-types";
const Row = (props) => {
  return (
    <section className="book-store_home_row-of-books">
      <h1>{props.heading}</h1>
      {props.subtitle ? <h4>{props.subtitle}</h4> : ""}
      <div
        row-container="true"
        style={{ height: props.containerHeight + "px" }}
        className="row-of-books-container"
      >
        <div row-lineup="true" id={props.id + "lineup"} className="row-lineup">
          {props.children}
        </div>
      </div>
    </section>
  );
};
Row.defaultProps = {
  heading: "Row Heading",
  subtitle: "A row",
  children: "Props. children",
  containerHeight: 250,
};
Row.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  containerHeight: PropTypes.number,
};

export default Row;
