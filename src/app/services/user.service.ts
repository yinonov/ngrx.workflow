import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Users } from './../../../shared/models/users/users.model';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  loadUserDetails(): Observable<Users> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }

}
