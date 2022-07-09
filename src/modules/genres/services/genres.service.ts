import { RESTDataSource } from 'apollo-datasource-rest';

export class GenresService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async getAllGenres() {
    const response = await this.get('');
    return response.items;
  }

  async getGenreById(genreId: string) {
    const response = await this.get(`${genreId}`);
    return response;
  }
}
