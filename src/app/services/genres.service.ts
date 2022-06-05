import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenreIncome} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient:HttpClient) { }

  getGenres():Observable<IGenreIncome> {
    return this.httpClient.get<IGenreIncome>(urls.genres)
  }
}
