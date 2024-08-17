import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchTerm: string = '';
  results: string[] = [];

  onSearch() {
    if (this.searchTerm) {
      this.results = ['Result 1', 'Result 2', 'Result 3'].filter(item =>
        item.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.results = [];
    }
  }

  trackByFn(index: number, item: string): number {
    return index;
  }
}