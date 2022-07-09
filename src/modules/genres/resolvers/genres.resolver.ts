import { GenreSchema } from '../schemas/genre.schema';
import { CreateGenreDto } from '../dto/create-genre.dto';
import { UpdateGenreDto } from '../dto/update-genre.dto';

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

  Mutation: {
    createGenre: async (_: any, { ...createGenreDto }: CreateGenreDto, { dataSources }: any) => {
      const genre: GenreSchema = await dataSources.genresService.createGenre(createGenreDto);
      const { _id, ...properties } = genre;

      return {
        id: _id,
        ...properties,
      };
    },

    updateGenreById: async (_: any, { genreId, ...updateGenreDto }: any, { dataSources }: any) => {
      const genre: GenreSchema = await dataSources.genresService.updateGenreById(
        genreId,
        updateGenreDto
      );
      const { _id, ...properties } = genre;

      return {
        id: _id,
        ...properties,
      };
    },

    deleteGenreById: async (_: any, { genreId }: any, { dataSources }: any) => {
      const genre: GenreSchema = await dataSources.genresService.deleteGenreById(genreId);
      return genre;
    },
  },
};
