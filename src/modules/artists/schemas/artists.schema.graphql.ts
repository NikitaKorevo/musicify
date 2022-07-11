import { gql } from 'apollo-server';

export const artistsSchemaGraphql = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Mutation {
    createArtist(
      firstName: String!
      secondName: String
      middleName: String!
      birthDate: String
      birthPlace: String
      country: String
      bandsIds: [String]
      instruments: [String]
    ): Artist
  }
`;
