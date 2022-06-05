import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {MovieService} from "../../services";
import {IMovieResults} from "../../interfaces";

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  movies: IMovieResults[];
  page: number = 1;
  lastPage: number;
  query:string;

  constructor(private movieService: MovieService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(value => {
      this.query = value[0];
    });

    this.searchMovies(this.query, this.page);
  }

  searchMovies(query:string, page: number) {
    this.movieService.getSearchMovies(query, page.toString()).subscribe(value => {
      this.movies = value.results;
      this.lastPage = value.total_pages;
    })
  }

  prev() {
    if (this.page > 1) {
      --this.page;
      this.searchMovies(this.query, this.page);
    } else {
    }
  }

  next() {
    if (this.page < this.lastPage) {
      ++this.page;
      this.searchMovies(this.query, this.page);
    } else {
    }
  }


}
