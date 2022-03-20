import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import { RegularBook } from "../../components/Book";
import SeriesPack from "./SeriesPack";
import { trending, popularSeries } from "../../data";
import "./index.css";

const Home = (props) => {
  return (
    <main className="book-store_view" id="book-store_home">
      <Banner />
      <Row
        heading="Popular Series"
        subtitle="Series trending today."
        containerHeight={310}
      >
        {popularSeries.map((series, index) => {
          return <SeriesPack key={index} name={series} />;
        })}
      </Row>
      <Row heading="Trending in Fiction" subtitle="">
        {trending.fiction.map((bookID, index) => {
          return <RegularBook key={index} id={bookID} />;
        })}
      </Row>
      <Row heading="Trending in History" subtitle="">
        {trending.history.map((bookID, index) => {
          return <RegularBook key={index} id={bookID} />;
        })}
      </Row>
    </main>
  );
};

export default Home;
