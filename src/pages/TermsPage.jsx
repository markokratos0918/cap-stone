import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class TermsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Trems And Condition " />
        <PageTop pagetitle="Trems And Condition" />
        <TermsDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default TermsPage;
