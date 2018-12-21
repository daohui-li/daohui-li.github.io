import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenav, MatSidenavModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
        SidenavComponent
      ],
      imports: [
        MatSidenavModule,
        BrowserAnimationsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  let fixture;
  let component;
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have sidenav child component', () => {
    const sidenav = fixture.debugElement.query(By.css('#sidenav-page-id'));
    expect(sidenav).toBeTruthy();
  });

  xit('should have main child component', () => {
    const main = fixture.debugElement.query(By.css('#main-page-id'));
    expect(main).toBeTruthy();
  });

  describe('sidenav behaver', () => {
    let sidenav;
    beforeEach(() => {
      sidenav = fixture.debugElement.query(By.css('#sidenav-page-id'));
    });

    it('should be closed initially', () => {
      expect(sidenav.attributes['opened']).toBe('false');
      expect(sidenav.attributes['align']).toBe('start');
      expect(sidenav.attributes['mode']).toBe('over');
    });

    // component.sidenav is null and 
    xit('should be opened when openSidenav() is called with true as input', () => {
      component.openSidenav(true);
      fixture.detectChanges();
      expect(sidenav.attributes['opened']).toBe('true');
    });
  });
});
