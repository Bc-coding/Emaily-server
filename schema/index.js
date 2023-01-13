const userTypeDefs = require("./user");

const typeDefs = `
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [typeDefs, userTypeDefs];
