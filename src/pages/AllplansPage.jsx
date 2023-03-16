import React, { Component, Fragment } from "react";
import AllPlans from "../components/AllPlans/AllPlans";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class AllplansPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="All Plans" />
        <PageTop pagetitle="All Plans" />
        <AllPlans />
        <Footer />
      </Fragment>
    );
  }
}

export default AllplansPage;
