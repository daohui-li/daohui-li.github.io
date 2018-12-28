import { Route, RouterModule } from '@angular/router';
import { ProfileComponent } from './main/profile/profile.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { InterestComponent } from './main/interest/interest.component';

export interface DecorateRoute extends Route {
    display?: string;
}

export declare type DecorateRoutes = DecorateRoute[];

export const appDecorateRoutes: DecorateRoute[] = [
    { display: 'Profile', path: 'profile', component: ProfileComponent},
    { display: 'Experience', path: 'experience', component: ExperienceComponent},
    { display: 'Interest', path: 'interest', component: InterestComponent},
    { path: '**', redirectTo: 'profile', pathMatch: 'full'}
];

export const router = RouterModule.forRoot(appDecorateRoutes,
    {useHash: true,
        initialNavigation: true,
        enableTracing: true // debug
    });
