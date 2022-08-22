import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInfo, ISearch } from '../model/film-app.model';

const URL_API = 'http://www.omdbapi.com';
const API_KEY = 'ce47be69';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getAllFilms(title: string, type: string, page: number): Observable<ISearch> {
    return this.http.get<ISearch>(
      `${URL_API}/?apikey=${API_KEY}&s=${title}&type=${type}&page=${page}`
    );
  }

  getFilmInfoById(imdbID: string): Observable<IInfo> {
    return this.http.get<IInfo>(`${URL_API}/?apikey=${API_KEY}&i=${imdbID}`);
  }
}
