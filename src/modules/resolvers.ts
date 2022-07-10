import { genresResolver } from './genres/resolvers/genres.resolver';
import { usersResolver } from './users/resolvers/users.resolver';
import { ArtistsResolver } from './artists/resolvers/artists.resolver';
import { bandsResolver } from './bands/resolvers/bands.resolver';
import { albumsResolver } from './albums/resolvers/albums.resolve';
import { favoritesResolver } from './favorites/resolvers/favorites.resolver';
import { tracksResolver } from './tracks/resolvers/tracks.resolver';

export const resolvers = [
  usersResolver,
  genresResolver,
  ArtistsResolver,
  bandsResolver,
  albumsResolver,
  favoritesResolver,
  tracksResolver,
];
