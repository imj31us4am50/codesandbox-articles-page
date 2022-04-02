import "./styles2.css";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "/mainpage/Title.js";
import SearchBar from "/mainpage/SearchBar.js";
import Article01 from "/articles/Article01.js";

export default function App2() {
  return (
    <div className="container-fluid mx-auto p-4 Main">
      <Title />
      <SearchBar />
      <Article01 />
      <Article01 />
      <Article01 />
      <Article01 />
      <Article01 />
      <Article01 />
      <Article01 />
    </div>
  );
}
