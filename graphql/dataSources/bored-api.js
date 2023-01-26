const { RESTDataSource } = require("@apollo/datasource-rest");

class BoredAPI extends RESTDataSource {
  constructor() {
    super();
    // the bored API is hosted on this server
    this.baseURL = "http://www.boredapi.com/api/activity";
  }

  // get a random activity
  getActivity() {
    return this.get();
  }
  // get a random activity by its type
  getActivityByType(type) {
    return this.get(`?type=${type}`);
  }
}

module.exports = BoredAPI;
