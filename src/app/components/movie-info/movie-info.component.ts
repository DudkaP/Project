import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovieResults} from "../../interfaces";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movieInfo: IMovieResults;
  poster500: string = urls.getPoster500;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      let {state: {data}} = history;
      this.movieInfo = data;
    })
  }

}
