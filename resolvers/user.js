const { combineResolvers } = require("graphql-resolvers");
const bcrypt = require("bcryptjs");

// Getting data from database
const User = require("../database/models/User");

module.exports = {
  Query: {
    users: async () => {
      try {
        // checking database if the user exists
        const users = await User.find();
        if (!users) {
          throw new Error("User not found!");
        }
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    signup: async (_, { input }) => {
      try {
        // first, we need to check if the user has already email to avoid duplication.

        const user = await User.findOne({ email: input.email });
        if (user) {
          throw new Error("Email already is use");
        }
        const hashedPassword = await bcrypt.hash(input.password, 12);
        // creating a new instance of the user model
        // then overwrite the password with hashed password
        const newUser = new User({ ...input, password: hashedPassword });
        const result = await newUser.save();
        console.log(result._id, typeof result._id);
        console.log(result.id, typeof result.id);
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
