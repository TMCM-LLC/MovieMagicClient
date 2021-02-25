import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl: string = 'https://localhost:5001/Movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  getMovieById(movieId: string) {
    return this.http.get<Movie>(`${this.baseUrl}/${movieId}`);
  }

  createMovie(movie: Movie) {
    const request = {
      Name: movie.name,
      Rating: movie.rating
    };
    return this.http.post(this.baseUrl, request);
  }

  updateMovie(movie: Movie) {
    return this.http.put(this.baseUrl, movie);
  }

  deleteMovie(movieId: string) {
    return this.http.delete(this.baseUrl + '/' + movieId);
  }
}
