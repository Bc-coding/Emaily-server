module.exports = `
 extend type Query {
    activity:  activityPayload!
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
`;
