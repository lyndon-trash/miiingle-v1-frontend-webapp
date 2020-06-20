import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-auth-reciever',
  templateUrl: './auth-reciever.component.html',
  styleUrls: ['./auth-reciever.component.scss']
})
export class AuthRecieverComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  async doClick() {
    // curl --location --request POST 'https://demo-headhuntr-io-1919.auth.us-east-1.amazoncognito.com/oauth2/token' \
    // --header 'Content-Type: application/x-www-form-urlencoded' \
    // --header 'Cookie: XSRF-TOKEN=d3241a2d-aa41-446d-853c-a27891c02033; csrf-state=""; csrf-state-legacy=""' \
    // --data-urlencode 'grant_type=authorization_code' \
    // --data-urlencode 'code=ab9f422f-6c8d-41cc-9c9e-869d4aabc429' \
    // --data-urlencode 'client_id=6ejll8o6d8iqtens2lmqcheev3' \
    // --data-urlencode 'redirect_uri=https://localhost:4200/auth' \
    // --data-urlencode 'state=123456' \
    // --data-urlencode 'scope=https://api.miiingle.net/backend.read'
    // how to i use the code to acquire a token?
    // https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html
    // POST /oauth2/token
    // header:
    // Authorization
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log('Code: ' + params.code);
      console.log('State: ' + params.state);
    });
  }
}
