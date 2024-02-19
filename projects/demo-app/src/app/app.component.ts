import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularUniversalNavbarComponent, NavItems, UniversalNavbarConfig } from 'angular-universal-navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularUniversalNavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  routes: NavItems[] = [
    {
      name: 'First',
      route: 'first'
    },
    {
      name: 'Second',
      //route: 'second',   // use route or children
      children: [
        {
          name: 'Second First',
          route: 'second-first'
        },
        {
          name: 'Second Second',
          route: 'second-second'
        },
      ],
    },
    {
      name: 'Third',
      route: 'third'
    },
    {
      name: 'Fourth',
      route: 'fourth'
    },

  ];

  position: 'left' | 'right' | 'top' = 'top';

  config = new UniversalNavbarConfig({
    position: 'top',
  });
}
