import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ArtistSchema } from '../schemas/artist.schema';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';

export class ArtistsService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `${this.context.token}`);
  }

  async createArtist(createArtistDto: CreateArtistDto): Promise<ArtistSchema> {
    const response = await this.post('', createArtistDto);
    return response;
  }
}
