import { RESTDataSource } from 'apollo-datasource-rest';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { UserSchema } from '../schemas/user.schema';

export class UsersService extends RESTDataSource {
  baseURL: string;

  constructor(baseURL: string) {
    super();
    this.baseURL = baseURL;
  }

  async getUserById(userId: string): Promise<UserSchema> {
    return this.get(`${userId}`);
  }

  async loginUser(loginDto: LoginDto): Promise<{ jwt: string }> {
    return this.post('login', loginDto);
  }

  async registerUser(registerDto: RegisterDto): Promise<UserSchema> {
    return this.post('register', registerDto);
  }
}
