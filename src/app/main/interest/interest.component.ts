import { Component, OnInit } from '@angular/core';
import { JsonItem, DisplayInterestData } from '../../models/interest-data';

declare const require;

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  readonly interests: DisplayInterestData[];

  constructor() {
    this.interests = require('src/assets/data/interest.json').map(js => new DisplayInterestData(js));
  }

  ngOnInit() {
  }

  constructlist(item: JsonItem): string {
    let text = '';
    if (item.name) {
      text += `<b>${item.name}:</b>`;
    }
    text += ` ${item.description}`;
    return text;
  }
}
