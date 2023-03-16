import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AllplansPage from "../pages/AllplansPage";
import AllServicePage from "../pages/AllServicePage";
import ContactPage from "../pages/ContactPage";
import PlansDetailsPage from "../pages/PlansDetailsPage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import ProjectPage from "../pages/ProjectPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={AllServicePage} />
          <Route exact path="/plans" component={AllplansPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />

          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/privacy" component={PrivacyPage} />

          <Route
            exact
            path="/projectdetails/:projectID/:projectName"
            component={ProjectDetailPage}
          />
          <Route
            exact
            path="/plansdetails/:plansID/:plansName"
            component={PlansDetailsPage}
          />

          <Route component={PageNotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRouter;
