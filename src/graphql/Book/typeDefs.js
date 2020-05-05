import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
  }

  extend type Mutation {
    createBook(title: String, content: String, author: String): Book
  }
`;
