export interface JsonItem {
    name?: string;
    description: string;
}

interface JsonInterestData {
    subject: string;
    items: JsonItem[];
}

export class DisplayInterestData implements JsonInterestData {
    subject: string;
    items: JsonItem[];

    constructor(js: JsonInterestData) {
      this.subject = js.subject;
      this.items = js.items;
    }
}
