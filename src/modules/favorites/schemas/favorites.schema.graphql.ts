import { gql } from 'apollo-server';

export const favoritesSchemaGraphql = gql`
  type Favorites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }
`;
