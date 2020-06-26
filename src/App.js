import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";

import PageNotFound from "./components/common/PageNotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Articles from "./components/articles/Articles";
import Journals from "./components/journals/Journals";
import Article from "./components/articles/Article";
import News from "./components/news/News";
import NewsItem from "./components/news/NewsItem";
import Columns from "./components/columns/Columns";
import Column from "./components/columns/Column";
import Author from "./components/columns/Author";
import PhotoReports from "./components/photo_reports/PhotoReports";
import PhotoReport from "./components/photo_reports/PhotoReport";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/article/:id" component={Article} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/page=:page" component={News} />
            <Route exact path="/news/:id" component={NewsItem} />
            <Route exact path="/articles" component={Articles} />
            <Route
              exact
              path="/articles/:category/page=:page"
              component={Articles}
            />
            <Route exact path="/articles/:category" component={Articles} />
            <Route exact path="/columns" component={Columns} />
            <Route exact path="/columns/:author" component={Author} />
            <Route exact path="/columns/:author/:id" component={Column} />
            <Route exact path="/photoreports" component={PhotoReports} />
            <Route exact path="/photoreports/page=:page" component={PhotoReports} />
            <Route exact path="/photoreport/:id" component={PhotoReport} />
            <Route path="/journals" component={Journals} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
