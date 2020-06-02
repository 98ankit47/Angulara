import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevDetailsComponent } from './dev-details/dev-details.component';
import { HomeindexComponent } from './homeindex/homeindex.component';

const routes: Routes = [
  { path: '', component: HomeindexComponent },
  { path: 'devDetails', component: DevDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
