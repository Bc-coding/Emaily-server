module.exports = `
extend type Mutation {
    placesToSeeCreate(input: placesToSeeCreateInput):PlacesToSeePostPayload
    placesToSeeUpdate(input: placesToSeeUpdateInput):PlacesToSeePostPayload
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
    postId: String!
    title: String!
    category: String!
    desc: String!
    location: String
    completed: Boolean
    date: String
    memo: String
    createdAt: String!
    updatedAt: String!
    _user: User
  }

  type User {
    userId: String!
    name: String!
    email: String!
    # posts: [Post!]
  }

  input placesToSeeCreateInput {
    title: String!
    category: String!
    desc: String!
    location: String
    completed: Boolean
    date: String
    memo: String
  }

  input placesToSeeUpdateInput {
    postId: String!
    post: placesToSeeCreateInput!
  }
`;
