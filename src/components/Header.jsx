import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Actions from "../redux/actions";
import * as icon from "../assets/images/icons/icon.png";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  function Logo() {
    return (
      <>
        <img src={icon.default} alt="Book-store" />
        <h3>BookStore</h3>
      </>
    );
  }
  function Navigations() {
    function Navlink(props) {
      function goTo() {
        dispatch(Actions.changeView(props.to));
      }
      return (
        <li
          style={{
            color: state.page === props.to ? "var(--selectColor)" : "black",
            fontWeight: state.page === props.to ? "bold" : "normal",
          }}
        >
          <Link onClick={goTo} to={"" + props.to.toLowerCase()}>
            {props.to}
          </Link>
        </li>
      );
    }
    return (
      <nav>
        <ul>
          <Navlink to="Home" />
          <Navlink to="Popular" />
          <Navlink to="Bestsellers" />
          <Navlink to="About Us" />
        </ul>
      </nav>
    );
  }
  function Search() {
    function openSearchBar() {}
    return (
      <div id="book-store_header_search-link" onClick={openSearchBar}>
        Search
      </div>
    );
  }
  function UserPrompts() {
    return (
      <div id="book-store_header_userprompts">
        <Link id="book-store_header_sign-in-button" to="/login">
          Login
        </Link>
        <Link id="book-store_header_create-acc-button" to="/sign-up">
          Sign Up
        </Link>
      </div>
    );
  }
  return (
    <header id="book-store_header">
      <Logo />
      <Navigations />
      <Search />
      <UserPrompts />
    </header>
  );
}

export default Header;
