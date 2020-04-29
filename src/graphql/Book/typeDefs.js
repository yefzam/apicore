import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String, content: String, author: String): Book
  }
`;
