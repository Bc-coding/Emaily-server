module.exports = `
  extend type Query {
    users: [User!]!
  }

  extend type Mutation {
    signup(input: signupInput):User
    login(input: loginInput): Token
  }

  ###### TYPE ######
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Token {
    token: String!
  }

  ###### INPUT #####
  input signupInput {
    name: String!
    email: String!
    password: String!
  }

  input loginInput {
    email: String!
    password: String!
  }
 
`;
