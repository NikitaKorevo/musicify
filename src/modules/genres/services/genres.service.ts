import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { CreateGenreDto } from '../dto/create-genre.dto';
import { UpdateGenreDto } from '../dto/update-genre.dto';
import { GenreSchema } from '../schemas/genre.schema';

export class GenresService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `${this.context.token}`);
  }

  async getAllGenres() {
    const response = await this.get('');
    return response.items;
  }

  async getGenreById(genreId: string) {
    const response = await this.get(`${genreId}`);
    return response;
  }

  async createGenre(createGenreDto: CreateGenreDto): Promise<GenreSchema> {
    const response = await this.post('', createGenreDto);
    return response;
  }

  async updateGenreById(genreId: string, updateGenreDto: UpdateGenreDto) {
    const response = await this.put(`${genreId}`, updateGenreDto);
    return response;
  }

  async deleteGenreById(genreId: string) {
    const response = await this.delete(`${genreId}`);
    return response;
  }
}
