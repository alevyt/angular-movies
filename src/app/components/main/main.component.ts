import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieItemComponent } from '../movie-item/movie-item.component'; 
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule, MovieItemComponent, LoadingSpinnerComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MovieService],
})
export class MainComponent {
  searchTerm: string = '';
  results: any[] = [];
  loading: boolean = false;

  constructor(private movieService: MovieService) {}

  onSearch() {
    if (this.searchTerm) {
      this.loading = true;
      this.movieService.searchMovies(this.searchTerm).subscribe((data) => {
        this.results = data.Search || [];
        console.log('results', this.results);
        this.loading = false;
      });
    } else {
      this.results = [];
      this.loading = false;
    }
  }

  showDetails(movie: { title: string, poster: string, year: string }) {
    // Logic for showing more details will be added later
    console.log(movie);
  }

  trackByFn(index: number, item: string): number {
    return index;
  }
}