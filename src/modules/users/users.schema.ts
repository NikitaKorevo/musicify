import { gql } from 'apollo-server';

export const usersSchema = gql`
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
