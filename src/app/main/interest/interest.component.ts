import { Component, OnInit } from '@angular/core';

declare const require;

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  readonly interests: InterestData[];

  constructor() {
    this.interests = require('src/assets/data/interest.json').map(js => new InterestData(js));
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
interface JsonItem {
  name?: string;
  description: string;
}
interface JsonInterestData {
  subject: string;
  items: JsonItem[];
}

class InterestData implements JsonInterestData {
  subject: string;
  items: JsonItem[];

  constructor(js: JsonInterestData) {
    this.subject = js.subject;
    this.items = js.items;
  }
}
