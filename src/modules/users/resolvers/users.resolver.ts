import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { UserSchema } from '../schemas/user.schema';

export const usersResolver = {
  Query: {
    getUserById: async (_: any, { userId }: any, { dataSources }: any) => {
      const user = await dataSources.usersService.getUserById(userId);
      return user;
    },

    loginUser: async (_: any, { ...loginDto }: LoginDto, { dataSources }: any) => {
      const jwt = await dataSources.usersService.loginUser(loginDto);
      return jwt;
    },
  },

  Mutation: {
    registerUser: async (_: any, { ...registerDto }: RegisterDto, { dataSources }: any) => {
      const user: UserSchema = await dataSources.usersService.registerUser(registerDto);
      const { _id, ...properties } = user;

      return {
        id: _id,
        ...properties,
      };
    },
  },
};
