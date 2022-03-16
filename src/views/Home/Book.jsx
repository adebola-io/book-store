import React from "react";
import PropTypes from "prop-types";
import Utils from "../../utils";
import { Link } from "react-router-dom";
import "./Book.css";

export const BannerBook = (props) => {
  const [bookInfo, setBookInfo] = React.useState({
    name: "",
    author: "",
    cover: "default.jpg",
  });
  React.useEffect(() => {
    Utils.fetchBook(props.id).then((data) =>
      setBookInfo({
        name: data.name,
        author: data.author,
        cover: data.localCover,
      })
    );
  }, [props.id]);
  return (
    <Link to={"/books/" + props.id}>
      <img
        src={Utils.getBookCover(bookInfo.cover, "md")}
        alt={bookInfo.name}
        className="book-store_banner-book-cover"
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
