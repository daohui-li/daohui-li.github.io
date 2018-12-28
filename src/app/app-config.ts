import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from './models/app-config.model';
import { Observable } from 'rxjs';

@Injectable()
export class AppConfig {
    static settings: IAppConfig;

    constructor(private http: HttpClient) {}

    load(): Promise<void> {
        const jsonFile = 'assets/data/app.json';
        return new Promise<void>((resolve: (IAppConfig) => void, reject: (any) => void) => {
            this.http.get<IAppConfig>(jsonFile).toPromise()
                .then((response: IAppConfig) => {
                    AppConfig.settings = response;
                    resolve(response);
                }).catch((response: any) => {
                    reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
                });
            });
    }
}
