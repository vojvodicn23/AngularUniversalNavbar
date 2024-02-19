import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularUniversalNavbarComponent } from 'angular-universal-navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularUniversalNavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  routes = [
    {
      name: 'First',
      route: 'first'
    },
    {
      name: 'Second',
      route: 'second'
    },
    {
      name: 'Third',
      route: 'third'
    },
    {
      name: 'Fourth',
      route: 'fourth'
    },

  ]
}
