import { RESTDataSource } from 'apollo-datasource-rest';

export class UsersService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async registerUser() {
    return null;
  }

  /* async getAllGenres() {
    const response = await this.get('');
    return response.items;
  }

  async getGenreById(genreId: string) {
    const response = await this.get(`${genreId}`);
    return response;
  } */
}
