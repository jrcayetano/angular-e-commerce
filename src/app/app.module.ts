import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap, MetaReducer } from '@ngrx/store';
import {userLoggedReducer} from './state/app-use-logged.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const reducers: ActionReducerMap<any> =  {
  userLogged: userLoggedReducer
};

export let metaReducers: Array<MetaReducer<any, any>> = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
