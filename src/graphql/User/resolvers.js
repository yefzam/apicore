import User from '../../models/User';

export const resolvers = {
  Mutation: {
    register: async (_, { email, displayName, password }) => {
      const newUser = new User({ email, displayName, password });
      return await newUser.save();
    },
  },
};
