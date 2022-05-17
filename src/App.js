import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import About from "./pages/About";
import NavBar from "./component/NavBar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/article-list" element={<ArticleList />} />
          <Route exact path="/article/:name" element={<Article />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
