import { gql } from 'apollo-server';

export const tracksSchemaGraphql = gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    getAllTracks: [Track]
    getTrackById(trackId: String!): Track
  }
`;
