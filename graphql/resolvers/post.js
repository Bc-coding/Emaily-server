// Getting data from database
const PlacesToSeePost = require("../../database/models/PlacesToSeePost");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = {
  Mutation: {
    placesToSeeCreate: async (_, { input }, { userInfo }) => {
      try {
        // console.log(userInfo);
        // creating a new instance of the post model
        if (!userInfo) {
          return {
            userErrors: [
              {
                message: "Forbidden access",
              },
            ],
            post: null,
          };
        }

        const user = await User.findOne({ email: userInfo.email });
        console.log(user);

        const { place, location, desc } = input;
        if (!place || !location || !desc) {
          return {
            userErrors: [
              {
                message:
                  "you must provide a place, a location and description to create a post",
              },
            ],
            post: null,
          };
        }

        const newPost = new PlacesToSeePost({ ...input, _user: user.id });
        console.log(newPost);
        const result = await newPost.save();

        return {
          userErrors: [],
          post: result,
        };
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
