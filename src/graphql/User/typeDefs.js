import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    id: ID!
    email: String
    password: String
    displayName: String
    avatar: String
    signupDate: String
    bucket: String
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    register(email: String, displayName: String, password: String): User
  }
`;
