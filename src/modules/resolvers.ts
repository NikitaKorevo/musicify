import { genresResolver } from './genres/resolvers/genres.resolver';
import { usersResolver } from './users/resolvers/users.resolver';

export const resolvers = {
  Query: {
    ...genresResolver.Query,
    ...usersResolver.Query,
  },
};
