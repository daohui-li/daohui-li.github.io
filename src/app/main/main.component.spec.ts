import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { click } from '../utils.spec';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { router } from '../routes';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { InterestComponent } from './interest/interest.component';
import { ExperienceComponent } from './experience/experience.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppConfig } from '../app-config';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        ProfileComponent,
        InterestComponent,
        ExperienceComponent
       ],
      imports: [ BrowserModule,
                 MatIconModule,
                 MatToolbarModule,
                 FlexLayoutModule,
                 HttpClientModule ],
      providers: [
        AppConfig
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const config = {
      user: {name: 'John Doe', title: 'aTitle', email: 'email',
             address: 'address', addressUrl: 'addressUrl', linkedin: 'linkedin'}};
    AppConfig.settings = config;
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain a button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });

  it('should emit open event when the button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const eventSpy = spyOn(component.openDrawerEvent, 'emit').and.stub();
    click(button);
    fixture.detectChanges();

    expect(eventSpy).toHaveBeenCalledWith(true);
  });
});
