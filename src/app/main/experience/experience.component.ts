import { Component, OnInit } from '@angular/core';
import { DisplayExperienceData } from 'src/app/models/experience-data';

declare const require;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  readonly exp: DisplayExperienceData[] = require('../../../assets/data/experience.json')
                                          .map(js => new DisplayExperienceData(js));

  ngOnInit() {
  }

}

