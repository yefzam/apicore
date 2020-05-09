import Book from '../../models/Book';
import { refreshToken } from './../../utils/';

export const resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    },
  },
  Mutation: {
    createBook: async (_, { title, content, author }, context) => {
      console.log('---', context);
      refreshToken(context.user);
      const newBook = new Book({ title, content, author });
      return await newBook.save();
    },
  },
};
