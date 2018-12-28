import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppConfig } from '../app-config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  developer = AppConfig.settings.user;

  @Output()
  openDrawerEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openSidenav() {
    this.openDrawerEvent.emit(true);
  }
}
