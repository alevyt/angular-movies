import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieItemComponent } from './movie-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieItemComponent', () => {
  let component: MovieItemComponent;
  let fixture: ComponentFixture<MovieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieItemComponent, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemComponent);
    component = fixture.componentInstance;
    component.title = 'Test Movie';
    component.poster = 'test-poster.jpg';
    component.year = '2024';
    component.imdbID = 'tt1234567';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('h3');
    expect(titleElement?.textContent).toContain('Test Movie');
  });

  it('should display the poster image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imgElement = compiled.querySelector('img');
    expect(imgElement?.src).toContain('test-poster.jpg');
  });

  it('should toggle details on click', () => {
    spyOn(component, 'onMovieClick').and.callThrough();
    const compiled = fixture.nativeElement as HTMLElement;
    const movieItem = compiled.querySelector('.movie-item') as HTMLElement;
    movieItem.click();

    expect(component.onMovieClick).toHaveBeenCalled();
    expect(component.showDetails).toBe(true);
  });

  it('should display and link the IMDb ID', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imdbLink = compiled.querySelector('a') as HTMLAnchorElement;

    expect(imdbLink).toBeTruthy();
    expect(imdbLink.textContent).toBe('tt1234567');
    expect(imdbLink.href).toBe('https://www.imdb.com/title/tt1234567');
  });
});
