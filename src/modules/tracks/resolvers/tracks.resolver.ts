import { TrackSchema } from '../schemas/track.schema';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';
import { convertPropertiesFromApi } from '../../../utils/convertProperties';

export const tracksResolver = {
  Query: {
    getAllTracks: async (_: any, __: any, { dataSources }: any) => {
      const allTracks: Array<TrackSchema> = await dataSources.tracksService.getAllTracks();
      return allTracks.map((track) => convertPropertiesFromApi(track));
    },

    getTrackById: async (_: any, { trackId }: any, { dataSources }: any) => {
      const track: TrackSchema = await dataSources.tracksService.getTrackById(trackId);
      return convertPropertiesFromApi(track);
    },
  },

  Mutation: {},
};
