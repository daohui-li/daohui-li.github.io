import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  readonly exp: DisplayExperienceData[];

  constructor() {
    this.exp = require('../../../assets/data/experience.json').map(js => new DisplayExperienceData(js));
  }

  ngOnInit() {
  }

}

export interface JsonExperienceData {
  date: string;
  title: string;
  company: string;
  description: string[];  // b/c json does not support multiple lines
}

export class DisplayExperienceData {
  date: string;
  title: string;
  company: string;
  description: string;

  constructor(js: JsonExperienceData) {
    this.date = js.date;
    this.title = js.title;
    this.company = js.company;
    this.description = js.description.join('\n');
  }
}
