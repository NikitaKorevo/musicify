import { gql } from 'apollo-server';

export const genresSchema = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    getAllGenres: [Genre]
  }
`;
//getGenreById(genreId: ID)): Genre
