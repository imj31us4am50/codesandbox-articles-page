import "./styles2.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "/mainpage/Title.js";
import SearchBar from "/mainpage/SearchBar.js";
import Article01 from "/articles/Article01.js";
import Article02 from "/articles/Article02.js";
import Article03 from "/articles/Article03.js";
import Article04 from "/articles/Article04.js";
import Article05 from "/articles/Article05.js";
import Article06 from "/articles/Article06.js";
import Article07 from "/articles/Article07.js";
import Article08 from "/articles/Article08.js";
import Article09 from "/articles/Article09.js";
import Article10 from "/articles/Article10.js";
import Article11 from "/articles/Article11.js";
import Article12 from "/articles/Article12.js";
import Article13 from "/articles/Article13.js";
import Article14 from "/articles/Article14.js";
import Article15 from "/articles/Article15.js";
import Footer from "/footer/Footer.js";

export default function App2() {
  return (
    <div className="container-fluid mx-auto p-5 Main">
      <Title />
      <SearchBar />
      <Article01 />
      {/* <Article02 />
      <Article03 />
      <Article04 />
      <Article05 />
      <Article06 />
      <Article07 />
      <Article08 />
      <Article09 />
      <Article10 />
      <Article11 />
      <Article12 />
      <Article13 />
      <Article14 />
      <Article15 /> */}
    </div>
  );
}
