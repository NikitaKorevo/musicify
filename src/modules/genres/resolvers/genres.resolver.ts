import { GenreSchema } from '../schemas/genre.schema';

export const genresResolver = {
  Query: {
    getAllGenres: async (_: any, __: any, { dataSources }: any) => {
      const allGenres: Array<GenreSchema> = await dataSources.genresService.getAllGenres();

      return allGenres.map(({ _id, ...properties }) => ({
        id: _id,
        ...properties,
      }));
    },

    getGenreById: async (_: any, { genreId }: any, { dataSources }: any) => {
      const genreById: GenreSchema = await dataSources.genresService.getGenreById(genreId);
      const { _id, ...properties } = genreById;

      return {
        id: _id,
        ...properties,
      };
    },
  },
};
