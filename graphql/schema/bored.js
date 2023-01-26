module.exports = `
 extend type Query {
    activity:  activityPayload!
    activityByType(input: typeInput): activityPayload!
  }  

  type actvityPayload {
    activity: String!
    accessibility: Int
    type: String
    participants: Int
    price: Int
    link: String
    key: String
  }

  input typeInput {
    type: String!
  }
`;
