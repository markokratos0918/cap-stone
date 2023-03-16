import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import PlansDetails from "../components/PlansDetails/PlansDetails";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AppUrl from "../RestAPI/AppUrl";
import RestClient from "../RestAPI/RestClient";

class PlansDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MyPlansId: props.match.params.plansID,
      PlansPassedName: props.match.params.plansName,
      PlansData: [],
    };
  }

  async componentDidMount() {
    window.scroll(0, 0);

    const result = await RestClient.GetRequest(
      AppUrl.PlansDetails + this.state.MyPlansId
    );
    this.setState({ PlansData: result });
  }

  render() {
    return (
      <Fragment>
        <TopNavigation title="Plans Details" />
        <PageTop pagetitle={this.state.PlansPassedName} />
        <PlansDetails plansallData={this.state.PlansData} />
        <Footer />
      </Fragment>
    );
  }
}

PlansDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      plansID: PropTypes.string.isRequired,
      plansName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PlansDetailsPage;
