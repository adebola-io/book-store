import React from "react";
import { Link } from "react-router-dom";
const Lists = () => {
  const List = (props) => {
    return <Link to={props.list} className="book-store_home_list"></Link>;
  };
  return (
    <ul id="book-store_home_lists">
      <List list="/"></List>
      <List list="/"></List>
      <List list="/"></List>
    </ul>
  );
};

export default Lists;
