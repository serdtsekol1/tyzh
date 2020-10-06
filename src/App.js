import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/home/HomePage";

import PageNotFound from "./components/common/PageNotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Articles from "./components/articles/Articles";
import Journals from "./components/journals/Journals";
import Journal from "./components/journals/Journal";
import Article from "./components/articles/Article";
import Author from "./components/authors/Author";
import News from "./components/news/News";
import NewsItem from "./components/news/NewsItem";
import Columns from "./components/columns/Columns";
import Column from "./components/columns/Column";
import PhotoReports from "./components/photo_reports/PhotoReports";
import PhotoReport from "./components/photo_reports/PhotoReport";
import FilterByTagPage from "./components/search/FilterByTagPage";
import ScrollToTop from "./components/common/ScrollToTop";
import ScriptTag from 'react-script-tag';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  ReactGA.initialize('UA-51335057-1');
  return (
    <Router history={history}>
      <ScrollToTop/>
      <div className="App">
      
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route path="/page-not-found" component={PageNotFound} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Tag/:tag" component={FilterByTagPage} />
            <Route exact path="/News" component={News} />
            <Route exact path="/News/page=:page" component={News} />
            <Route exact path="/News/:id" component={NewsItem} />
            
            <Route exact path="/Columns" component={Columns} />
            <Route exact path="/Columns/page=:page" component={Columns} />
            
            <Route exact path="/Columns/50/:id" component={Column} />
            <Redirect from='/Columns/:id' to='/Columns/50/:id' />
            <Route exact path="/Author/:id" component={Author} />
            <Route exact path="/Gallery" component={PhotoReports} />
            <Route exact path="/Gallery/page=:page" component={PhotoReports} />
            <Route exact path="/Gallery/:id" component={PhotoReport} />
            <Route path="/Magazines" component={Journals} />
            <Route path="/Magazine/:id" component={Journal} />
            <Route exact path="/Publications" component={Articles} />
            <Route exact path="/Publications/page=:page" component={Articles} />
            
            <Redirect from='/Publications/:category/:id' to='/:category/:id' />
            <Redirect from='/Publications/:category/page=:page' to='/:category/page=:page' />
            
            <Route exact path="/:category" component={Articles} />
            
            <Route
              exact
              path="/:category/page=:page"
              component={Articles}
            />
            
            <Route exact path="/:category/:id" component={Article} />


            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
