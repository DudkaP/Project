import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

import {StorageService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: IUser;
  form: FormGroup

  constructor(private userInfoService: StorageService, private router:Router) {

    this.form = new FormGroup({
      query: new FormControl('')
    });

    this.userInfoService.storage.subscribe(value => this.user = value);

  }

  ngOnInit(): void {
  }

  logOut() {
    this.userInfoService.storage.next({});
  }

  search() {
    this.router.navigate(['search'], {queryParams:[this.form.value.query]});
  }
}
