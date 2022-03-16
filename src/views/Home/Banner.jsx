import React from "react";
import Book from "./Book";

const Banner = () => {
  return (
    <section id="book-store_home_banner">
      <h1>Featured Books</h1>
      <h4>Read the bestselling books today.</h4>
      <div id="book-store_home_banner_shelf-container">
        <div id="book-store_home_banner_shelf">
          <Book id="0f742677332363fa" includeDetails={false} />
          <Book includeDetails={false} />
          <Book id="0d6b136135c2e59e" includeDetails={false} />
          <Book id="07857873691e9d35" includeDetails={false} />
          <Book id="09c1bb775b4909fa" includeDetails={false} />
          <Book id="09c1bb775b4909fa" includeDetails={false} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
