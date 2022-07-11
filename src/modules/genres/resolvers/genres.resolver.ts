import { GenreSchema } from '../schemas/genre.schema';
import { CreateGenreDto } from '../dto/create-genre.dto';
import { UpdateGenreDto } from '../dto/update-genre.dto';
import { convertPropertiesFromApi } from '../../../utils/convertProperties';

export const genresResolver = {
  Query: {
    getAllGenres: async (_: any, __: any, { dataSources }: any) => {
      const allGenres: Array<GenreSchema> = await dataSources.genresService.getAllGenres();
      return allGenres.map((genre) => convertPropertiesFromApi(genre));
    },

    getGenreById: async (_: any, { genreId }: any, { dataSources }: any) => {
      const genreById: GenreSchema = await dataSources.genresService.getGenreById(genreId);
      return convertPropertiesFromApi(genreById);
    },
  },

  Mutation: {
    createGenre: async (_: any, { ...createGenreDto }: CreateGenreDto, { dataSources }: any) => {
      const genre: GenreSchema = await dataSources.genresService.createGenre(createGenreDto);
      return convertPropertiesFromApi(genre);
    },

    updateGenreById: async (_: any, { genreId, ...updateGenreDto }: any, { dataSources }: any) => {
      const genre: GenreSchema = await dataSources.genresService.updateGenreById(
        genreId,
        updateGenreDto
      );

      return convertPropertiesFromApi(genre);
    },

    deleteGenreById: async (_: any, { genreId }: any, { dataSources }: any) => {
      const characteristic = await dataSources.genresService.deleteGenreById(genreId);
      return characteristic;
    },
  },
};
