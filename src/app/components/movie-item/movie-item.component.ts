import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() title!: string;
  @Input() poster!: string;
  @Input() year!: string;

  placeholderImage: string = 'assets/noposter.svg';

  // Later we can add click handling for showing more details
}
