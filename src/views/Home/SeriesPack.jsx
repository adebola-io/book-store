import React from "react";
import Utils from "../../utils";

const SeriesPack = (props) => {
  const firstBook = React.useRef(null),
    secondBook = React.useRef(null),
    thirdBook = React.useRef(null);
  const [author, setAuthor] = React.useState("");
  React.useEffect(() => {
    Utils.fetchSeries(props.name?.toLowerCase()).then((data) => {
      data.books.sort((a, b) => a.noInSeries - b.noInSeries);
      setAuthor(data.author);
      firstBook.current.style.backgroundImage = `url(${Utils.getBookCover(
        data.books[0].localCover,
        "md"
      )})`;
      secondBook.current.style.backgroundImage = `url(${Utils.getBookCover(
        data.books[1].localCover,
        "md"
      )})`;
      thirdBook.current.style.backgroundImage = `url(${Utils.getBookCover(
        data.books[2].localCover,
        "md"
      )})`;
    });
  }, [props.name]);
  return (
    <div className="book-store_home_series_container">
      <div
        style={{ backgroundColor: props.theme }}
        className="book-store_home_series-pack"
      >
        <div
          ref={firstBook}
          className="book-store_home_series-pack_book-1"
        ></div>
        <div className="book-store_home_series-pack_other-books">
          <div
            ref={secondBook}
            className="book-store_home_series-pack_book-2"
          ></div>
          <div
            ref={thirdBook}
            className="book-store_home_series-pack_book-3"
          ></div>
        </div>
      </div>
      <div className="book-store_home_series-pack_details">
        <h4 series-name="true">{props.name}</h4>
        <span series-author="true">{author}</span>
      </div>
    </div>
  );
};
SeriesPack.defaultProps = {
  theme: "var(--themeColor)",
};

export default SeriesPack;
