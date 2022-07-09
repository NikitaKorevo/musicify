import { gql } from 'apollo-server';
import { usersSchemaGraphql } from './users/schemas/users.schema.graphql';
import { genresSchemaGraphql } from './genres/schemas/genres.schema.graphql';

export const schemas = gql`
  ${usersSchemaGraphql}
  ${genresSchemaGraphql}
`;
