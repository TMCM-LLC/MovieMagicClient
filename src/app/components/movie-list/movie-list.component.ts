import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    newMovie: Movie;
    movies: Movie[];

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.newMovie = new Movie();
        this.movieService.getMovies().subscribe(result => {
            this.movies = result;
            console.log(this.movies)
        });
    }

    ratingChanged(movie: Movie, rating: number) {
        movie.rating = rating;
        this.movieService.updateMovie(movie).subscribe();
    }
}
