import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService, SocialUser} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public user: SocialUser;

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  logout(): void {
    this.authService.signOut().then(_ => this.user = null);
  }

  register(): void {
    console.log('Register');
    this.http.post(`${environment.apiUrl}/registrations`, {
      firstName: 'test',
      lastName: 'test',
      fullName: 'test'
    }).subscribe((result) => {
      console.log(result);
    });
  }
}
