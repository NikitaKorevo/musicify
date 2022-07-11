import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { CreateBandDto } from '../dto/create-band.dto';
import { UpdateBandDto } from '../dto/update-band.dto';
import { BandSchema } from '../schemas/band.schema';

export class BandsService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `${this.context.token}`);
  }
}
