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
