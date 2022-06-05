import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storage = new BehaviorSubject<any>({});

  constructor() { }

}
