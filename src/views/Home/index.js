import React from "react";
import Banner from "./Banner";
import Lists from "./Lists";
import Row from "./Row";
import "./index.css";

const Home = (props) => {
  return (
    <main className="book-store_view" id="book-store_home">
      <Banner />
      <Lists />
      <Row />
    </main>
  );
};

export default Home;
