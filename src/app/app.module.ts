import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';

import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthServiceConfig, FacebookLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import {MapComponent} from './main-nav/map/map.component';
import {MaterialModule} from './material/material.module';
import {MainNavComponent} from './main-nav/main-nav.component';
import {ProfileComponent} from './main-nav/profile/profile.component';
import {ServiceWorkerModule} from '@angular/service-worker';

export function socialAuthConfig() {
  return new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider(environment.fbAppId)
    }
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MainNavComponent,
    MapComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MaterialModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({apiKey: environment.mapApiKey}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: socialAuthConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
