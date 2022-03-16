import React from "react";
import PropTypes from "prop-types";
import Utils from "../../utils";
import "./Book.css";

const Book = (props) => {
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

  /**
   * @type {CSSStyleDeclaration}
   */
  const CoverStyles = {
    backgroundImage:
      "url(" +
      require("../../assets/images/books/lowres/" + bookInfo.cover).default +
      ")",
  };
  return (
    <div className="book-store_book">
      <div style={CoverStyles} className="book-store_book-cover"></div>
      {props.includeDetails === true ? (
        <div className="book-store_book_info">
          <span className="book-store_book_info_name">{bookInfo.name}</span>
          <span className="book-store_book_info_author">{bookInfo.author}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
Book.defaultProps = {
  id: "012d31673b15fc17",
  includeDetails: true,
};
Book.propTypes = {
  id: PropTypes.string,
  includeDetails: PropTypes.bool,
};
export default Book;
