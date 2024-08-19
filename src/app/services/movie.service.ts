import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '4603613e'; // TODO: think of a way to hide this

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}?s=${title}&apikey=${this.apiKey}`
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?i=${id}&apikey=${this.apiKey}`);
  }
}
