import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/searchResult';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

    searchResults: SearchResult[];
    searchTerm: string;

    constructor(private service: MovieService) { }

    ngOnInit(): void {
        this.searchResults = [];
    }

    search() {
        if (this.searchTerm) {
            this.service.searchMovie(this.searchTerm).subscribe(results => {
                console.log(results);
                this.searchResults = results
            }); 
        }
    }

}
