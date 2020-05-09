import { ApolloServer } from 'apollo-server';
import { getUser } from './utils';
import schema from './graphql/index';
import './database';

export const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const user = getUser(req.headers.authorization);
    return {
      user,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
