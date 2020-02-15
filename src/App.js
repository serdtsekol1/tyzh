import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Articles from "./components/articles/Articles";
import Journals from "./components/journals/Journals";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/articles/:category" component={Articles} />
            <Route path="/journals" component={Journals} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
