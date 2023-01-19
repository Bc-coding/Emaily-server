const mongoose = require("mongoose");
const { Schema } = mongoose;

const placesToSeePostSchema = new Schema(
  {
    place: {
      type: String,
    },
    location: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  // the timestamps will automatically have created_at and updated_at fields
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("placesToSeePost", placesToSeePostSchema);
