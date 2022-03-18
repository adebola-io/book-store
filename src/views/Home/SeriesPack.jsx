import React from "react";
import Utils from "../../utils";

const SeriesPack = (props) => {
  const bookRefs = [React.useRef(null), React.useRef(null), React.useRef(null)];
  const [series, setSeries] = React.useState({
    author: "",
    books: [],
  });
  React.useEffect(() => {
    Utils.fetchSeries(props.name?.toLowerCase())
      .then((data) => {
        data.books.sort((a, b) => a.noInSeries - b.noInSeries);
        setSeries({
          author: data.author,
          books: data.books,
        });
        return series;
      })
      .then(() => {
        bookRefs.forEach((ref, index) => {
          ref.current.style.backgroundImage = `url(${Utils.getBookCover(
            series.books[index].localCover,
            "md"
          )})`;
        });
      });
  }, []);
  return (
    <div className="book-store_home_series_container">
      <div
        style={{ backgroundColor: props.theme }}
        className="book-store_home_series-pack"
      >
        <div
          ref={bookRefs[0]}
          className="book-store_home_series-pack_book-1"
        ></div>
        <div className="book-store_home_series-pack_other-books">
          <div
            ref={bookRefs[1]}
            className="book-store_home_series-pack_book-2"
          ></div>
          <div
            ref={bookRefs[2]}
            className="book-store_home_series-pack_book-3"
          ></div>
        </div>
      </div>
      <div className="book-store_home_series-pack_details">
        <span series-name="true">{props.name}</span>
        <span series-author="true">{series.author}</span>
      </div>
    </div>
  );
};
SeriesPack.defaultProps = {
  theme: "var(--themeColor)",
};

export default SeriesPack;
