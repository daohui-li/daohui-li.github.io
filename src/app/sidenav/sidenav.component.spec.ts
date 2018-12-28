import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent } from './sidenav.component';
import { By } from '@angular/platform-browser';
import { AppConfig } from '../app-config';
import { MatIconModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { router, appDecorateRoutes, DecorateRoute } from '../routes';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports: [
        MatIconModule,
        RouterTestingModule
      ],
      providers: [
        AppConfig
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const config = {
      user: {name: 'John Doe', title: 'aTitle', email: 'email',
             address: 'address', addressUrl: 'addressUrl', linkedin: 'linkedin'}};
    AppConfig.settings = config;
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
      component.routes = appDecorateRoutes;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });

  it('should emit close event when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const eventSpy = spyOn(component.closeSideNavEvent, 'emit').and.stub();
    button.nativeElement.click();
    fixture.detectChanges();

    expect(eventSpy).toHaveBeenCalledWith(false);
  });
});
