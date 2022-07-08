import { gql } from 'apollo-server';
import { genresSchema } from './genres/genres.schema';
import { usersSchema } from './users/users.schema';

export const schemas = gql`
  ${usersSchema}
  ${genresSchema}
`;

/* export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`; */
