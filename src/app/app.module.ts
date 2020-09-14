import { StatesService } from './services/states.service';
import { HomeModule } from './private-zone/home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  StoreModule,
  ActionReducerMap,
  MetaReducer,
  ActionReducer,
} from '@ngrx/store';
import { userLoggedReducer } from './state/app-use-logged.reducer';
import { basketReducer } from './state/basket.reducer';
import { appReducer } from './state/app.reducers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { ReactiveFormsModule } from '@angular/forms';

const reducers: ActionReducerMap<any> = {
  userLogged: userLoggedReducer,
  basket: basketReducer,
  app: appReducer,
};

export function localStoragesyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['app'],
    rehydrate: true,
    storage: sessionStorage,
  })(reducer);
}

// Import clearstate y meterlo en el array de metareducers
export let metaReducers: Array<MetaReducer<any, any>> = [
  localStoragesyncReducer,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 100,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
