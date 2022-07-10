import { gql } from 'apollo-server';

export const membersSchemaGraphql = gql`
  type Member {
    artist: String
    instrument: String
    years: String
  }
`;
