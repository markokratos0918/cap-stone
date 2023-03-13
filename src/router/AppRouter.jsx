import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllCourses from "../components/AllCourses/AllCourses";
import AboutPage from "../pages/AboutPage";
import AllServicePage from "../pages/AllServicePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PortfolioPage from "../pages/PortfolioPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={AllServicePage} />
          <Route exact path="/course" component={AllCourses} />
          <Route exact path="/porfolio" component={PortfolioPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRouter;
