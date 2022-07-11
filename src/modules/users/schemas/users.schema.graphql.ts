import { gql } from 'apollo-server';

export const usersSchemaGraphql = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type jwt {
    jwt: String!
  }

  type Query {
    getUserById(userId: String!): User
    loginUser(email: String!, password: String!): jwt
  }

  type Mutation {
    registerUser(firstName: String!, lastName: String!, email: String!, password: String!): User
  }
`;
