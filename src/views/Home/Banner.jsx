import React from "react";
import { BannerBook } from "../../components/Book";

const Banner = () => {
  return (
    <section id="book-store_home_banner">
      <h1>Featured Books</h1>
      <h4>Read the bestselling books today.</h4>
      <div id="book-store_home_banner_shelf-container">
        <div id="book-store_home_banner_shelf">
          <BannerBook id="0295a8673a53192c" />
          <BannerBook id="09a6f16f3bb92245" />
          <BannerBook id="09f957683b64be49" />
          <BannerBook id="0b55b17730cdda35" />
          <BannerBook id="0c3c3c6e3d5134e2" />
          <BannerBook id="03bf8f743a6dbc7a" />
        </div>
      </div>
    </section>
  );
};

export const DBBanner = () => {
  return <div></div>;
};

export default Banner;
