import { genresResolver } from './genres/genres.resolver';
import { usersResolver } from './users/users.resolver';

export const resolvers = {
  Query: {
    ...genresResolver.Query,
    ...usersResolver.Query,
  },
};

/* export const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};
 */
