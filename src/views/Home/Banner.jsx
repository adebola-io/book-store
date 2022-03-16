import React from "react";
import { BannerBook } from "./Book";

const Banner = () => {
  return (
    <section id="book-store_home_banner">
      <h1>Featured Books</h1>
      <h4>Read the bestselling books today.</h4>
      <div id="book-store_home_banner_shelf-container">
        <div id="book-store_home_banner_shelf">
          <BannerBook id="012d31673b15fc17" />
          <BannerBook id="09f957683b64be49" />
          <BannerBook id="0c3c3c6e3d5134e2" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
