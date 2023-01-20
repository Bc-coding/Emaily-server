module.exports = `
extend type Mutation {
    placesToSeeCreate(input: placesToSeeInput):PlacesToSeePostPayload
  }

  type PlacesToSeePostPayload {
    userErrors: [UserError!]!
    post: PlacesToSeePost
  }

  type UserError {
    message: String!
  }

  type PlacesToSeePost {
    id: ID!
    title: String!
    category: String!
    desc: String!
    location: String
    completed: Boolean
    date: String
    memo: String

    createdAt: String!
    updatedAt: String!
    user: User!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    # posts: [Post!]!
  }

  input placesToSeeInput {
    title: String!
    category: String!
    desc: String!
  }
`;
