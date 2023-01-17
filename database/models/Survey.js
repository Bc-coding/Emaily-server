const mongoose = require("mongoose");
const { Schema } = mongoose;
// import RecipientSchema to make a subdocument
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    recipients: {
      // type: [String],
      type: [RecipientSchema],
      required: true,
    },
    yes: {
      type: Number,
      default: 0,
      required: true,
    },
    no: {
      type: Number,
      default: 0,
      required: true,
    },
    // creating a relationship to a particular user -- the survey belongs to the user
    // _ the underscore means a reference field
    _user: {
      type: Schema.Types.ObjectId, // the id of the particular use owns this
      ref: "User",
    },
    dateSent: Date,
    lastResponded: Date,
  },
  // the timestamps will automatically have created_at and updated_at fields
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("survey", surveySchema);
