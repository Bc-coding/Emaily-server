// Getting data from database
const PlacesToSeePost = require("../../database/models/PlacesToSeePost");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const Post = mongoose.model("placesToSeePost");
const canUserMutatePost = require("../../utils/canUserMutatePost");

module.exports = {
  Mutation: {
    placesToSeeCreate: async (_, { input }, { userInfo }) => {
      console.log(userInfo);
      try {
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

        const { title, category, desc } = input;
        if (!title || !category || !desc) {
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

    placesToSeeUpdate: async (_, { input }, { userInfo }) => {
      console.log(userInfo);
      console.log(input);
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

      // const post = await Post.findOne({ title: input.title });
      // console.log(post);

      // const error = await canUserMutatePost({
      //   userId: userInfo.userId,
      //   postId: post._id,
      // });

      // if (error) return error;

      // const { title, content } = post;
      // if (!title && !content) {
      //   return {
      //     userErrors: [
      //       {
      //         message:
      //           "you must provide either a title or a content to update a post",
      //       },
      //     ],
      //     post: null,
      //   };
      // }

      // const existingPost = await prisma.post.findUnique({
      //   where: {
      //     id: Number(postId),
      //   },
      // });

      // if (!existingPost) {
      //   return {
      //     userErrors: [
      //       {
      //         message: "Post does not exist",
      //       },
      //     ],
      //     post: null,
      //   };
      // }

      // let payloadToUpdate = {
      //   title,
      //   content,
      // };

      // if (!title) delete payloadToUpdate.title;
      // if (!content) delete payloadToUpdate.content;

      // return {
      //   userErrors: [],
      //   post: prisma.post.update({
      //     data: {
      //       ...payloadToUpdate,
      //     },
      //     where: {
      //       id: Number(postId),
      //     },
      //   }),
      // };
    },
  },
};
