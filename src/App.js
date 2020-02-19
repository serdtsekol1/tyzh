import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";

import PageNotFound from "./components/common/PageNotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Articles from "./components/articles/Articles";
import Journals from "./components/journals/Journals";
import Article from "./components/article/Article";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/article/:id" component={Article} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:category" component={Articles} />
            <Route
              exact
              path="/articles/:category/page=:page"
              component={Articles}
            />
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
