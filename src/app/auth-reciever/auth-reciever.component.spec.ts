import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRecieverComponent } from './auth-reciever.component';

describe('AuthRecieverComponent', () => {
  let component: AuthRecieverComponent;
  let fixture: ComponentFixture<AuthRecieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRecieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
