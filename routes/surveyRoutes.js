const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const MailerNew = require("../services/MailerNew");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const { mail } = require("sendgrid");

// if we will implement any testing in the future, Mongoose would complaint we imports the model several times if we import directly from models directory
// the workaround is to import from Mongoose class

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    // before we create a survey, we need to verify the user
    // 1. making sure the user is logged
    // 2. making sure if the user has enough credits
    // ----> to reuse the middleware requireLogin
    const { title, subject, body, recipients } = req.body;

    // create a new instance of survey
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: req.user.id, // the id is already generated by Mongo when the user was being created
      dateSent: Date.now(),
    });

    // attempt to create and send email
    const mailer = new Mailer(
      survey, // data object -- passing survey's body to the template which will be the body of the email
      surveyTemplate(survey)
      // template context the recipient will see
    );
    mailer.send();

    // email sent successfully and then we will save survey
  });
};
