import React from "react";
import { useParams } from "react-router-dom";
import { prominent } from "color.js";
import { Link } from "react-router-dom";
import Utils from "../../utils";
import "./index.css";

const SingleBook = (props) => {
  const params = useParams();
  const [bookDetails, setBookDetails] = React.useState({
    name: "",
    author: [""],
    series: "",
    blurb: "",
    localCover: "default.jpg",
    bg: "url()",
  });
  React.useEffect(() => {
    Utils.fetchBook(params.id).then((data) => {
      setBookDetails({
        ...data,
        bg: Utils.getBookCover(data.localCover, "hd"),
      });
    });
  }, []);
  const BookBackground = () => {
    return (
      <div
        style={{
          backgroundImage: `url(${bookDetails.bg})`,
        }}
        id="book-store_single-book_background"
      ></div>
    );
  };
  const BookFrontCover = () => {
    return (
      <img
        id="book-store_single-book_main-book-cover"
        className="image-loading"
        onLoad={function (e) {
          prominent(e.target.src).then((colors) => {
            e.target.style.border = `2px solid rgb(${
              (colors[0], colors[1], colors[2])
            })`;
            e.target.classList.remove("image-loading");
          });
        }}
        src={bookDetails.bg}
        alt={bookDetails.name}
      />
    );
  };
  const BookInfo = () => {
    const blurb = React.useRef(null);
    const [overflows, setOverflows] = React.useState(true);
    function expandBlurb() {
      blurb.current.style.height = "fit-content";
      blurb.current.style.marginBottom = "45px";
      setOverflows(false);
    }
    React.useEffect(() => {
      let formattedBlurb = Utils.blurbify(bookDetails.blurb);
      blurb.current.append(formattedBlurb.head);
      blurb.current.append(formattedBlurb.content);
    }, []);
    return (
      <div id="book-store_single-book_info">
        <h1 id="book-store_single-book_info_title">{bookDetails.name}</h1>
        {bookDetails.series && (
          <h3 id="book-store_single-book_info_series">
            {`${bookDetails.series} #${bookDetails.noInSeries}`}
          </h3>
        )}
        <h3 id="book-store_single-book_info_author">
          {bookDetails.author.join(" & ")}
        </h3>
        <div id="book-store_single-book_info_action-row">
          <button
            className="book-store_single-book_button"
            id="book-store_single-book_info_buy_outer"
          >
            <Link id="book-store_single-book_info_buy_inner" to="#">
              Buy
            </Link>
          </button>
          <button
            className="book-store_single-book_button"
            id="book-store_single-book_info_add-to-wishlist_outer"
          >
            Add to Wishlist
          </button>
        </div>
        <p id="book-store_single-book_info_blurb" ref={blurb}></p>
        {overflows ? (
          <button
            id="book-store_single-book_info_read-more"
            onClick={expandBlurb}
          >
            Read More
          </button>
        ) : (
          ""
        )}
      </div>
    );
  };
  return (
    <main className="book-store_view" id="book-store_single-book">
      <BookBackground />
      <div id="book-store_single-book_details">
        <BookFrontCover />
        <BookInfo />
      </div>
    </main>
  );
};

export default SingleBook;
