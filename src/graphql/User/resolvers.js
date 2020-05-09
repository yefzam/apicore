import bcrypt from 'bcryptjs';
import { generateToken } from './../../utils/';
import User from '../../models/User';

export const resolvers = {
  Mutation: {
    register: async (_, { email, displayName, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email,
        displayName,
        password: hashedPassword,
      });
      return await newUser.save();
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error('Invalid Login');
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error('Invalid Login');
      }

      const token = generateToken(user);

      return {
        token,
        user,
      };
    },
  },
};
