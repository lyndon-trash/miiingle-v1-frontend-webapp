import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {AuthenticationComponent} from './authentication/authentication.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {AuthServiceConfig, FacebookLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MapComponent} from './main-nav/map/map.component';
import {ProfileComponent} from './main-nav/profile/profile.component';
import {AgmCoreModule} from '@agm/core';

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
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
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
