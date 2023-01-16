const mongoose = require("mongoose");
const { Schema } = mongoose;

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
      type: [String],
      required: true,
    },
  },
  // the timestamps will automatically have created_at and updated_at fields
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("survey", surveySchema);
