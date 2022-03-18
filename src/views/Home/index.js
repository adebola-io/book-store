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
        <SeriesPack
          name="A Song of Ice and Fire"
          author="George R.R. Martin"
          theme="green"
        />
        <SeriesPack name="Harry Potter" author="J.K. Rowling" theme="blue" />
        <SeriesPack
          name="A Song of Ice and Fire"
          author="George R.R. Martin"
          theme="purple"
        />
      </Row>
      <Row></Row>
    </main>
  );
};

export default Home;
