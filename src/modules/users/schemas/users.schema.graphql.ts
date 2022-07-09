import { gql } from 'apollo-server';

export const usersSchemaGraphql = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type Query {
    books: Int
  }
`;
