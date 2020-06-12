import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';

import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {LayoutModule} from '@angular/cdk/layout';
import {MapComponent} from './main-nav/map/map.component';
import {MaterialModule} from './material/material.module';
import {MainNavComponent} from './main-nav/main-nav.component';
import {ProfileComponent} from './main-nav/profile/profile.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {HttpClientModule} from '@angular/common/http';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify, {Auth} from 'aws-amplify';

// TODO:
// to improve/customize the login experience:
// https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#sign-up
Amplify.configure({
  Auth: {
    region: environment.aws.region,
    userPoolId: environment.cognito.poolId,
    userPoolWebClientId: environment.cognito.clientId ,
  },
  API: {
    endpoints: [
      {
        name: 'Backend',
        endpoint: environment.api.endpoint,
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
          };
        }
      }
    ]
  }
});


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MapComponent,
    ProfileComponent
  ],
  imports: [
    AmplifyUIAngularModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AgmCoreModule.forRoot({apiKey: environment.mapApiKey}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
