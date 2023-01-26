module.exports = {
  Query: {
    activity: (_, __, { dataSources }) => {
      return dataSources.boredAPI.getActivity();
    },
    activityByType: (_, { input }, { dataSources }) => {
      return dataSources.boredAPI.getActivityByType(input.type);
    },
  },
};
