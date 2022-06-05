import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

import {StorageService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: IUser;
  form: FormGroup;

  constructor(private storageService: StorageService) {
    this.form = new FormGroup({
      name: new FormControl(''),
      age: new FormControl('')
    });
    this.storageService.storage.subscribe(value => this.user = value);
  }

  ngOnInit(): void {
  }

  saveToStorage() {
    this.storageService.storage.next(this.form.value);
  }
}
