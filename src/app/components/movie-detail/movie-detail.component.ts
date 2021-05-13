import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/models/movieDetail';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

    details: MovieDetail;

    constructor(private service: MovieService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log('params', params);
            const id = params['id'];
            console.log(id);
            this.service.getMovieById(id).subscribe(movie => {
                this.details = movie;
                console.log(this.details);
            });
        });
    }

}
