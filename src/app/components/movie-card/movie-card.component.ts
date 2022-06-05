import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

import {IMovieResults} from "../../interfaces";
import {urls} from "../../constants";


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movieCard: IMovieResults;
  poster500: string = urls.getPoster500;


  constructor(private activatedRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      let {state: {data}} = history;
      this.movieCard = data;

    })
  }

  back() {
    this.location.back()
  }
}
