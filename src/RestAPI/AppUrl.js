class AppUrl {
  //static BaseURL = "https://backend.webdesignworkx.com/api";
  static BaseURL = "http://127.0.0.1:8000/api";

  static HomeTopTitle = this.BaseURL + "/homepage/title";
  static HomeTechDesc = this.BaseURL + "/techhome";
  static TotalHomeDetails = this.BaseURL + "/totalhome";
  static HomeVideo = this.BaseURL + "/home/video";

  static ProjectDetails = this.BaseURL + "/projectdetails/";
  static ProjectAll = this.BaseURL + "/projectall";
  static ProjectHome = this.BaseURL + "/projecthome";

  static Services = this.BaseURL + "/services";

  static Information = this.BaseURL + "/information";
  static FooterData = this.BaseURL + "/footerdata";

  static PlansDetails = this.BaseURL + "/plansdetails/";
  static PlansAll = this.BaseURL + "/plansall";
  static PlansHome = this.BaseURL + "/planshome";

  static ContactSend = this.BaseURL + "/contactsend";
  static ClientReview = this.BaseURL + "/clientreview";
  static ChartData = this.BaseURL + "/chartdata";
}

export default AppUrl;
