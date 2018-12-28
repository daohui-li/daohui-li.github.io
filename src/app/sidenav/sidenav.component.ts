import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { appDecorateRoutes } from '../routes';
import { AppConfig } from '../app-config';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  user = AppConfig.settings.user;

  @Output()
  closeSideNavEvent = new EventEmitter<boolean>();

  routes = appDecorateRoutes;

  constructor() { }

  ngOnInit() {}

  closeSidenav() {
    this.closeSideNavEvent.emit(false);
  }
}
