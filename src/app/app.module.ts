import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import {FormsModule      } from "@angular/forms"

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { WeatherAppComponent } from "./weather-app/weather-app.component";
import { AppService } from "./services/appService";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: WeatherAppComponent}
      ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    WeatherAppComponent
  ],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
