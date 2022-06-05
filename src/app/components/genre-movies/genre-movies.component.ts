import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IGenre, IMovieResults} from "../../interfaces";
import {MovieService} from "../../services";

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.css']
})
export class GenreMoviesComponent implements OnInit {

  genre: IGenre;
  genreMovies: IMovieResults[];
  page: number;
  lastPage: number;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(() => {
      let {state: {data}} = history;
      this.genre = data;
      this.page = 1;
      this.showGenreMovies(this.genre.id, this.page);

    })
  }

  showGenreMovies(id: number, page: number) {
    this.movieService.getGenreMovies(id.toString(), page.toString()).subscribe(value => {
      this.genreMovies = value.results;
      this.lastPage = value.total_pages
    });
  }

  prev() {
    if (this.page > 1) {
      --this.page;
      this.showGenreMovies(this.genre.id, this.page);
    } else {
    }
  }

  next() {
    if (this.page < this.lastPage) {
      ++this.page;
      this.showGenreMovies(this.genre.id, this.page)
    } else {
    }
  }

}
