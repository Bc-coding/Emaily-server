const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, (req, res) => {
    // before we create a survey, we need to verify the user
    // 1. making sure the user is logged
    // 2. making sure if the user has enough credits
    // ----> to reuse the middleware requireLogin
  });
};
