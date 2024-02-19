import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { SecondFirstComponent } from './second/second-first/second-first.component';
import { SecondSecondComponent } from './second/second-second/second-second.component';

export const routes: Routes = [
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
    { path: 'fourth', component: FourthComponent },
    { path: 'second-first', component: SecondFirstComponent },
    { path: 'second-second', component: SecondSecondComponent },
];
