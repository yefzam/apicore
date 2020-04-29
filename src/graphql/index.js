import { resolvers as bookResolver } from './Book/resolvers';
import { typeDefs as bookTypeDefs } from './Book/typeDefs';

const typeDefs = [bookTypeDefs];
const resolvers = [bookResolver];

export { typeDefs, resolvers };
