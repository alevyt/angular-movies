import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no unmatched requests are outstanding
  });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch movies by search term', () => {
    const dummyMovies = {
      Search: [
        { Title: 'Movie 1', Year: '2021', imdbID: 'tt1234567', Poster: 'poster1.jpg' },
        { Title: 'Movie 2', Year: '2022', imdbID: 'tt7654321', Poster: 'poster2.jpg' }
      ],
      totalResults: '2',
      Response: 'True'
    };
  
    const searchTerm = 'Batman';
  
    service.searchMovies(searchTerm).subscribe(movies => {
      expect(movies.length).toBe(2);
      expect(movies).toEqual(dummyMovies.Search);
    });
  
    const req = httpMock.expectOne(`https://www.omdbapi.com/?apikey=4603613e&s=${searchTerm}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovies);
  });

  it('should fetch movie details by IMDb ID', () => {
    const dummyMovieDetails = {
      Title: 'Movie 1',
      Year: '2021',
      Rated: 'PG-13',
      Released: '01 Jan 2021',
      Runtime: '120 min',
      Genre: 'Action, Adventure',
      Director: 'Director Name',
      Writer: 'Writer Name',
      Actors: 'Actor 1, Actor 2',
      Plot: 'Some plot',
      Language: 'English',
      Country: 'USA',
      Awards: 'Some awards',
      Poster: 'poster1.jpg',
      Ratings: [{ Source: 'Internet Movie Database', Value: '7.5/10' }],
      Metascore: 'N/A',
      imdbRating: '7.5',
      imdbID: 'tt1234567',
      Type: 'movie',
      DVD: 'N/A',
      BoxOffice: 'N/A',
      Production: 'N/A',
      Website: 'N/A',
      Response: 'True'
    };
  
    const imdbID = 'tt1234567';
  
    service.getMovieDetails(imdbID).subscribe(movie => {
      expect(movie.Title).toBe('Movie 1');
      expect(movie).toEqual(dummyMovieDetails);
    });
  
    const req = httpMock.expectOne(`https://www.omdbapi.com/?apikey=4603613e&i=${imdbID}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovieDetails);
  });
});