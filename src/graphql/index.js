import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

//RESOLVERS
import { resolvers as bookResolver } from './Book/resolvers';
import { resolvers as userResolver } from './User/resolvers';

//TYPEDEFS
import { typeDefs as Book } from './Book/typeDefs';
import { typeDefs as User } from './User/typeDefs';

const Query = `
  type Query
  type Mutation
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Book, User],
  resolvers: merge(bookResolver, userResolver),
});

export default schema;
