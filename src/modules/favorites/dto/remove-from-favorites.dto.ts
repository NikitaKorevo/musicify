export type RemoveFromFavoritesDto = {
  type: 'band' | 'genre' | 'artist' | 'track';
  id: string;
};
