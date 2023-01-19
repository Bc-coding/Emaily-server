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
    // creating a relationship to a particular user -- the survey belongs to the user
    // _ the underscore means a reference field
    _user: {
      type: Schema.Types.ObjectId, // the id of the particular use owns this
      // ref: "User",
      ref: "users",
    },
  },
  // the timestamps will automatically have created_at and updated_at fields
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("placesToSeePost", placesToSeePostSchema);
