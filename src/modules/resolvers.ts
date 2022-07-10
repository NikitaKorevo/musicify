import { genresResolver } from './genres/resolvers/genres.resolver';
import { usersResolver } from './users/resolvers/users.resolver';

export const resolvers = [usersResolver, genresResolver];
