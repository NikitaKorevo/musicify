import { genresResolver } from './genres/resolvers/genres.resolver';
import { usersResolver } from './users/resolvers/users.resolver';

export const resolvers = {
  Query: {
    ...usersResolver.Query,
    ...genresResolver.Query,
  },
  Mutation: {
    ...usersResolver.Mutation,
    ...genresResolver.Mutation,
  },
};
