import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IInfo } from 'src/app/shared/model/film-app.model';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss'],
})
export class FilmInfoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FilmInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IInfo
  ) {}

  ngOnInit(): void {}
}
