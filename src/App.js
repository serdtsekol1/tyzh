import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Articles from "./components/articles/Articles";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container main-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/articles/:category" component={Articles} />
        </div>
      </div>
    </Router>
  );
}

export default App;
