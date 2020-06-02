import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevDetailsComponent } from './dev-details/dev-details.component';
import { HomeindexComponent } from './homeindex/homeindex.component';

@NgModule({
  declarations: [
    AppComponent,
    DevDetailsComponent,
    HomeindexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
