import dotenv from 'dotenv';
import { env } from 'process';
import { ApolloServer } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { resolvers } from './modules/resolvers';
import { schemas } from './modules/schemas';
import { UsersService } from './modules/users/services/users.service';
import { GenresService } from './modules/genres/services/genres.service';

dotenv.config();

const dataSources = () => ({
  usersService: new UsersService(env.USERS_BASE_URL || 'http://localhost:3004/v1/users'),
  genresService: new GenresService(env.GENRES_BASE_URL || 'http://localhost:3001/v1/genres'),
});

const startApolloServer = async (schemas: DocumentNode, resolvers: any, dataSources: any) => {
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    dataSources,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => ({
      token: req.headers.authorization,
    }),
  });

  const { url } = await server.listen({ port: env.PORT || 4000 });
  console.log(`Server start ${url}`);
};

startApolloServer(schemas, resolvers, dataSources);
