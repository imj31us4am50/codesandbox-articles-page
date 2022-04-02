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

export default function App2() {
  return (
    <div className="container-fluid mx-auto p-4 Main">
      <Title />
      <SearchBar />
      <Article01 />
      <Article02 />
      <Article03 />
      <Article04 />
      <Article05 />
      <Article01 />
      <Article01 />
    </div>
  );
}
