import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter';

import { UserService } from './services/user.service';

import { Users } from './../../shared/models/users/users.model';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users$: Observable<Users>;
  counter$: Observable<number>;

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {
    this.counter$ = this.store.select('counter');
    this.users$ = this.userService.loadUserDetails();
    // .subscribe(
    // users => console.log(users)
    // )
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

}
