import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmInfoDialogComponent } from './film-info-dialog.component';

describe('FilmInfoDialogComponent', () => {
  let component: FilmInfoDialogComponent;
  let fixture: ComponentFixture<FilmInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmInfoDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
