import { gql } from 'apollo-server';

export const bandsSchemaGraphql = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }
`;
