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
    place: String!
    location: String!
    desc: String!

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
    place: String!
    location: String!
    desc: String!
    people: [String]
    memories: String

  }
`;
