const mongoose = require("mongoose");

// Getting data from database
const PlacesToSeePost = require("../../database/models/PlacesToSeePost");
// const User = mongoose.model("users");

module.exports = {
  Mutation: {
    placesToSeeCreate: async (_, { input }) => {
      try {
        // creating a new instance of the post model

        const newPost = new PlacesToSeePost({ ...input });
        const result = await newPost.save();
        console.log(result._id, typeof result._id);
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
