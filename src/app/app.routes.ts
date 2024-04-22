import { Routes } from '@angular/router';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { JoinPageComponent } from './join-page/join-page.component';

export const routes: Routes = [
    {
        path:'',
        component:LandingPageComponent,
    },
    {
        path:'home',
        redirectTo:''
    },
    {
        path: 'discover',
        component: DiscoverPageComponent
    },
    {
        path:'join',
        component: JoinPageComponent
    },
    {
        path:'**',
        component:NotfoundpageComponent
    }

];
