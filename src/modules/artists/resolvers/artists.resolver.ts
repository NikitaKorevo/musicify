import { ArtistSchema } from '../schemas/artist.schema';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';
import { convertPropertiesFromApi } from '../../../utils/convertProperties';

export const ArtistsResolver = {
  Query: {},

  Mutation: {
    createArtist: async (_: any, { ...createArtistDto }: CreateArtistDto, { dataSources }: any) => {
      const artist: ArtistSchema = await dataSources.genresService.createGenre(createArtistDto);
      return convertPropertiesFromApi(artist);
    },
  },
};
