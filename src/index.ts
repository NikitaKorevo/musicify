import dotenv from 'dotenv';
import { env } from 'process';
import { ApolloServer } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { resolvers } from './modules/resolvers';
import { schemas } from './modules/schemas';
import { UsersService } from './modules/users/services/users.service';
import { GenresService } from './modules/genres/services/genres.service';
import { ArtistsService } from './modules/artists/services/artists.service';
import { BandsService } from './modules/bands/services/bands.service';
import { AlbumsService } from './modules/albums/services/albums.service';
import { FavoritesService } from './modules/favorites/services/favorites.service';
import { TracksService } from './modules/tracks/services/tracks.service';

dotenv.config();

const dataSources = () => ({
  usersService: new UsersService(env.USERS_BASE_URL || 'http://localhost:3004/v1/users'),
  genresService: new GenresService(env.GENRES_BASE_URL || 'http://localhost:3001/v1/genres'),
  artistsService: new ArtistsService(env.ARTISTS_BASE_URL || 'http://localhost:3002/v1/artists'),
  bandsService: new BandsService(env.BANDS_BASE_URL || 'http://localhost:3003/v1/bands'),
  albumsService: new AlbumsService(env.ALBUMS_BASE_URL || 'http://localhost:3005/v1/albums'),
  favoritesService: new FavoritesService(
    env.FAVORITES_BASE_URL || 'http://localhost:3007/v1/favourites'
  ),
  tracksService: new TracksService(env.TRACKS_BASE_URL || 'http://localhost:3006/v1/tracks'),
});

const startApolloServer = async (schemas: DocumentNode, resolvers: any, dataSources: any) => {
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    dataSources,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => ({
      token: req.headers.authorization,
    }),
  });

  const { url } = await server.listen({ port: env.PORT || 4000 });
  console.log(`Server start ${url}`);
};

startApolloServer(schemas, resolvers, dataSources);
