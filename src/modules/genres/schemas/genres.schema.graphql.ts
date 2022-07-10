import { gql } from 'apollo-server';

export const genresSchemaGraphql = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: String
  }

  type Query {
    getAllGenres: [Genre]
    getGenreById(genreId: ID!): Genre
  }

  type deleteResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Mutation {
    createGenre(name: String!, description: String, country: String, year: Int): Genre
    updateGenreById(
      genreId: String!
      name: String
      description: String
      country: String
      year: Int
    ): Genre
    deleteGenreById(genreId: String!): deleteResponse
  }
`;
