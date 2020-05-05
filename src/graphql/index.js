import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers as bookResolver } from './Book/resolvers';
import { typeDefs as Book } from './Book/typeDefs';
import { resolvers as userResolver } from './User/resolvers';
import { typeDefs as User } from './User/typeDefs';

const Query = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Book, User],
  resolvers: merge(bookResolver, userResolver),
});

export default schema;
