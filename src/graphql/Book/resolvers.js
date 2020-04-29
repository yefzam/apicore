import Book from '../../models/Book';

export const resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    },
  },
  Mutation: {
    createBook: async (_, { title, content, author }) => {
      const newBook = new Book({ title, content, author });
      return await newBook.save();
    },
  },
};
