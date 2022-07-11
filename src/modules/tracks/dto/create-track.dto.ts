export type CreateTrackDto = {
  title: string;
  albumId?: string;
  artistsIds?: string[];
  bandsIds?: string[];
  duration?: number;
  released?: number;
  genresIds?: string[];
};
