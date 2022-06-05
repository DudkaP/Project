import {Component, Input, OnInit} from '@angular/core';

import {IMovieResults} from "../../interfaces";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovieResults;
  getPoster200: string = urls.getPoster200;


  constructor() {
  }

  ngOnInit(): void {
  }

}
