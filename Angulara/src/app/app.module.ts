import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from  '@angular/forms';
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
