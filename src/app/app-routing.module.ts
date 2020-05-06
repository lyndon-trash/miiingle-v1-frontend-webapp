import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileComponent} from './main-nav/profile/profile.component';
import {MapComponent} from './main-nav/map/map.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent },
  {path: 'map', component: MapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
