import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InterestComponent } from './main/interest/interest.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ProfileComponent } from './main/profile/profile.component';
import { router } from './routes';
import { AppConfig } from './app-config';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    InterestComponent,
    ExperienceComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    router
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
