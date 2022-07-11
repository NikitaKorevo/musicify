export type AddToFavoritesDto = {
  type: 'bands' | 'genres' | 'artists' | 'tracks';
  id: string;
};
