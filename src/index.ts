import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { DocumentNode } from 'graphql';
import { env } from 'process';
import { resolvers } from './modules/resolvers';
import { schemas } from './modules/schemas';
import { GenresAPI } from './modules/services/genresAPI';

dotenv.config();

const dataSources = () => ({
  genresAPI: new GenresAPI(env.GENRES_BASE_URL || 'http://localhost:3001/v1/genres'),
});

const startApolloServer = async (schemas: DocumentNode, resolvers: any, dataSources: any) => {
  const server = new ApolloServer({
    typeDefs: schemas,
    resolvers,
    dataSources,
    csrfPrevention: true,
    cache: 'bounded',
  });

  const { url } = await server.listen({ port: env.PORT || 4000 });
  console.log(`Server start ${url}`);
};

startApolloServer(schemas, resolvers, dataSources);
