import { RESTDataSource } from 'apollo-datasource-rest';

export class GenresAPI extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async getAllGenres() {
    const response = await this.get('');
    return response.items;
  }
}
