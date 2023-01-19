module.exports = `
extend type Mutation {
    placesToSeeCreate(input: placesToSeeInput):PlacesToSeePost
  }

  type PlacesToSeePost {
    id: ID!
    place: String!
    location: String!
    desc: String!

    createdAt: String!
    updatedAt: String!
    # user: User!
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
