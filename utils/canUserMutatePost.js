const mongoose = require("mongoose");
const User = mongoose.model("users");
const PlacesToSeePost = mongoose.model("placesToSeePost");

const canUserMutatePost = async ({ userInfo, postId }) => {
  const user = await User.findOne({ email: userInfo.email });

  if (!user) {
    return {
      userErrors: [
        {
          message: "User not found",
        },
      ],
      post: null,
    };
  }

  const post = await PlacesToSeePost.findOne({ postId });

  if (post?._user !== user.id) {
    return {
      userErrors: [
        {
          message: "Post not owned by the user",
        },
      ],
      post: null,
    };
  }
};

module.exports = canUserMutatePost;
