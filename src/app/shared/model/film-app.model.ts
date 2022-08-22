export interface IType {
  value: string;
  viewValue: string;
}

export interface ISearch {
  Response: string;
  Search: IFilm[];
  totalResults: string;
}

export interface IFilm {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IInfo {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [{ Source: string; Value: string }];
  Metascore: string;
  imdbRating: number;
  imdbVotes: number;
  imdbID: string;
  Type: string;
  totalSeasons: number;
  Response: boolean;
}
