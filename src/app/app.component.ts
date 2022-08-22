import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { IFilm, IInfo, ISearch, IType } from './shared/model/film-app.model';
import { FilmService } from './shared/service/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'films-app';

  types: IType[] = [
    { value: 'movie', viewValue: 'Movie' },
    { value: 'series', viewValue: 'Series' },
    { value: 'episode', viewValue: 'Episode' },
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  inputValue: string = '';
  typeValue: string = '';

  page: number = 1;
  pageIndex: number = 0;

  films: IFilm[] = [];
  info!: IInfo;
  filmsResponse!: ISearch;

  isFilmsVisible: boolean = false;

  constructor(private filmService: FilmService) {}

  ngOnInit() {}

  getFilms($event?: PageEvent): void {
    if ($event) {
      this.pageIndex = $event?.pageIndex!;
      this.page = this.pageIndex + 1;
    } else {
      this.pageIndex = 0;
      this.page = 1;
    }

    if (this.inputValue) {
      this.isFilmsVisible = true;

      this.filmService
        .getAllFilms(this.inputValue, this.typeValue, this.page)
        .subscribe((films: ISearch) => {
          this.filmsResponse = films;
          this.films = films.Search;
          // console.log(films.Search);
          // console.log(films);
        });
    } else {
      this.isFilmsVisible = false;
    }
  }
}
