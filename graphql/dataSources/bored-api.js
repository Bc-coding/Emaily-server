const { RESTDataSource } = require("@apollo/datasource-rest");

class BoredAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = "http://www.boredapi.com/api/activity";
  }

  getActivity() {
    return this.get();
  }

  getActivityByType(type) {
    return this.get(`?type=${type}`);
  }
}

module.exports = BoredAPI;
