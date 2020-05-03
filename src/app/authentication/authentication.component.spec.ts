import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthenticationComponent} from './authentication.component';
import {AuthService} from 'angularx-social-login';
import {Observable, of} from 'rxjs';
import {SocialUser} from 'angularx-social-login/entities/user';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  class MockAuthService {
    get authState(): Observable<SocialUser> {
      return of(new SocialUser());
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      providers: [{provide: AuthService, useValue: MockAuthService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
