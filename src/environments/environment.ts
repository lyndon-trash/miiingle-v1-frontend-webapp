// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fbAppId: '628721804375700',
  mapApiKey: 'AIzaSyAOh36EhNzrMfT-czhSa14cPNBVMWH4vs0',
  apiUrl: 'http://localhost:8080',
  aws: {
    region: 'us-east-1'
  },
  cognito: {
    region: 'us-east-1',
    poolId: 'us-east-1_5Pk5RO0Al',
    clientId: '58h0gvr70gb10uhd4stv7l9i32'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
