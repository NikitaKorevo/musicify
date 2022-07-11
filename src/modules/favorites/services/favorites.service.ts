import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { FavoriteSchema } from '../schemas/favorite.schema';
import { AddToFavoritesDto } from '../dto/add-to-favorites.dto';
import { RemoveFromFavoritesDto } from '../dto/remove-from-favorites.dto';

export class FavoritesService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `${this.context.token}`);
  }
}
