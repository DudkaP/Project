import {Component, OnInit} from '@angular/core';

import {MovieService} from "../../services";
import {IMovieResults} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovieResults[];
  page: number = 1;
  lastPage: number;


  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {

    this.showMovies(this.page);

  }

  showMovies(page: number) {
    this.movieService.getMoviePages(page.toString()).subscribe(value => {
      this.movies = value.results;
      this.lastPage = value.total_pages;
    })
  }

  prev() {
    if (this.page > 1) {
      --this.page;
      this.showMovies(this.page);
    } else {
    }
  }

  next() {
    if (this.page < this.lastPage) {
      ++this.page;
      this.showMovies(this.page)
    } else {
    }
  }


}
