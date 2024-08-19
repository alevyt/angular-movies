import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() title!: string;
  @Input() poster!: string;
  @Input() year!: string;
  @Input() imdbID!: string;

  placeholderImage: string = 'assets/noposter.svg';
  showDetails: boolean = false;
  movieDetails: any = null;
  loading: boolean = false;

  constructor(private movieService: MovieService) {}

  onMovieClick() {
    if (!this.showDetails) {
      this.showDetails = true;
      if (!this.movieDetails) {
        this.loading = true;
        this.movieService.getMovieDetails(this.imdbID).subscribe((data) => {
          this.movieDetails = data;
          this.loading = false;
        });
      }
    } else {
      this.showDetails = false;
    }
  }
}
