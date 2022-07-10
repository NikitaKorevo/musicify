import { gql } from 'apollo-server';
import { usersSchemaGraphql } from './users/schemas/users.schema.graphql';
import { genresSchemaGraphql } from './genres/schemas/genres.schema.graphql';
import { artistsSchemaGraphql } from './artists/schemas/artists.schema.graphql';
import { bandsSchemaGraphql } from './bands/schemas/bands.schema.graphql';
import { membersSchemaGraphql } from './members/schemas/members.schema.graphql';
import { albumsSchemaGraphql } from './albums/schemas/albums.schema.graphql';
import { favoritesSchemaGraphql } from './favorites/schemas/favorites.schema.graphql';
import { tracksSchemaGraphql } from './tracks/schemas/tracks.schema.graphql';

export const schemas = gql`
  ${usersSchemaGraphql}
  ${genresSchemaGraphql}
  ${artistsSchemaGraphql}
  ${bandsSchemaGraphql}
  ${albumsSchemaGraphql}
  ${favoritesSchemaGraphql}
  ${tracksSchemaGraphql}
  ${membersSchemaGraphql}
`;
