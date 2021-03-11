import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

    @Input() movie: Movie;
    @Output() ratingClicked = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

}
