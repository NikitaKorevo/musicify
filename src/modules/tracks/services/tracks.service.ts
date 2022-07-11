import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { TrackSchema } from '../schemas/track.schema';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';

export class TracksService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `${this.context.token}`);
  }

  async getAllTracks() {
    const response = await this.get('');
    return response.items;
  }

  async getTrackById(trackId: string) {
    const response = await this.get(`${trackId}`);
    return response;
  }
}
