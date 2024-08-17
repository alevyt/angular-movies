import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from '../movie-item/movie-item.component'; 
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, MovieItemComponent, LoadingSpinnerComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MovieService],
})
export class MainComponent implements OnInit {
  searchTerm: string = '';
  results: any[] = [];
  loading: boolean = false;
  private searchSubject = new Subject<string>();

  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(500), 
        distinctUntilChanged(),
        switchMap((term: string) => {
          if (term) {
            this.loading = true;
            return this.movieService.searchMovies(term);
          } else {
            this.loading = false;
            return [];
          }
        })
      )
      .subscribe((data) => {
        this.results = data.Search || [];
        this.loading = false;
      });
  }

  onSearch() {
    this.searchSubject.next(this.searchTerm);
  }

  showDetails(movie: { title: string, poster: string, year: string }) {
    // Logic for showing more details will be added later
    console.log(movie);
  }

  trackByFn(index: number, item: string): number {
    return index;
  }
}