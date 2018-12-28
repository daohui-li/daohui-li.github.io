import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  openSidenav(open: boolean) {
    if (open) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }
}
