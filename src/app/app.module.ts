import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
