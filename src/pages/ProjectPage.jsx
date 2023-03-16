import React, { Component, Fragment } from "react";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";

class ProjectPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Projects" />
        <PageTop pagetitle="Our Projects" />
        <AllProjects />
        <Footer />
      </Fragment>
    );
  }
}

export default ProjectPage;
