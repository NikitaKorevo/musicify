import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { AlbumSchema } from '../schemas/album.schema';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';

export class AlbumsService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `${this.context.token}`);
  }
}
