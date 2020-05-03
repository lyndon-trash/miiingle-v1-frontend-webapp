import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './authentication/authentication.component';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';


const routes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'home', component: MainNavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
