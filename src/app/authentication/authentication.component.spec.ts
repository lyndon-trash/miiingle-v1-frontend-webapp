import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthenticationComponent} from './authentication.component';
import {AuthService} from 'angularx-social-login';
import {Observable, of} from 'rxjs';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  class MockAuthService {
    get authState(): Observable<any> {
      return of({});
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      providers: [{provide: AuthService, useClass: MockAuthService}]
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
