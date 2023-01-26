module.exports = {
  Query: {
    activity: (_, __, { dataSources }) => {
      return dataSources.boredAPI.getActivity();
    },
  },
};
