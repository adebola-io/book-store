import React from "react";
import PropTypes from "prop-types";
import Utils from "../utils";
import { Link } from "react-router-dom";
import "./Book.css";

export const BannerBook = (props) => {
  const cover = React.useRef(null);
  function showImage() {
    cover.current.classList.remove("image-loading");
  }
  React.useEffect(() => {
    Utils.fetchBook(props.id).then((data) => {
      cover.current.src = Utils.getBookCover(data.localCover, "md");
      cover.current.setAttribute("alt", data.name);
    });
  }, [props.id]);
  return (
    <Link to={"/books/" + props.id}>
      <img
        alt=""
        ref={cover}
        onLoad={showImage}
        className="image-loading book-store_banner-book-cover"
      ></img>
    </Link>
  );
};
BannerBook.defaultProps = {
  id: "0",
};
BannerBook.propTypes = {
  id: PropTypes.string,
};

export const RegularBook = (props) => {
  const cover = React.useRef(null);
  const author = React.useRef(null);
  const title = React.useRef(null);
  function showImage() {
    cover.current.classList.remove("image-loading");
  }
  React.useEffect(() => {
    Utils.fetchBook(props.id).then((data) => {
      cover.current.src = Utils.getBookCover(data.localCover, "md");
      cover.current.setAttribute("alt", data.name);
      title.current.innerText = data.name;
      author.current.innerText = data.author.join(" & ");
    });
  }, []);
  return (
    <Link to={"/books/" + props.id} className="book-store_regular-book">
      <img
        ref={cover}
        onLoad={showImage}
        alt=""
        className="book-store_regular-book_cover"
      />
      <span className="book-store_regular-book_info">
        <h4 ref={title} className="book-store_regular-book_title"></h4>
        <span ref={author} className="book-store_regular-book_author"></span>
      </span>
    </Link>
  );
};
RegularBook.defaultProps = {
  id: "0",
};
RegularBook.propTypes = {
  id: PropTypes.string,
};
