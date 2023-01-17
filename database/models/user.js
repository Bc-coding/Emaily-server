const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // the timestamps will automatically have created_at and updated_at fields
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
