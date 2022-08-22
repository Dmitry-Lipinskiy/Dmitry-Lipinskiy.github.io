import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFilm, IInfo } from 'src/app/shared/model/film-app.model';
import { FilmService } from 'src/app/shared/service/film.service';
import { FilmInfoComponent } from '../film-info/film-info.component';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent implements OnInit {
  info!: IInfo;

  @Input() film!: IFilm;

  constructor(private filmService: FilmService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  getFilmInfo(imdbID: string) {
    this.filmService.getFilmInfoById(imdbID).subscribe((info: IInfo) => {
      this.info = info;
      this.dialog.open(FilmInfoComponent, {
        width: "100%",
        data: this.info,
      });
      // console.log(info);
    });
  }
}
