export const genresResolver = {
  Query: {
    getAllGenres: async (_: any, __: any, { dataSources }: any) => {
      const genres = dataSources.genresAPI.getAllGenres();
      return genres;
    },
  },
};
