import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import SeriesPack from "./SeriesPack";
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
        <SeriesPack name="A Song of Ice and Fire" theme="green" />
        <SeriesPack name="Harry Potter" theme="blue" />
        <SeriesPack name="The Stormlight Archive" theme="purple" />
        <SeriesPack name="Diary of a Wimpy Kid" theme="red" />
        <SeriesPack name="The Books of Babel" theme="orange" />
      </Row>
      <Row heading="Trending Fiction"></Row>
    </main>
  );
};

export default Home;
