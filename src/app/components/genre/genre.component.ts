import {Component, Input, OnInit} from '@angular/core';

import {IGenre, IUser} from "../../interfaces";
import {StorageService} from "../../services";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenre;
  user: IUser;

  constructor(private storageService: StorageService) {
    this.storageService.storage.subscribe(value => this.user = value);

  }

  ngOnInit(): void {
  }

}
