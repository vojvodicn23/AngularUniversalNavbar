import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@Component({
  selector: 'angular-universal-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavItemComponent],
  templateUrl: './angular-universal-navbar.component.html',
  styleUrl: './angular-universal-navbar.component.css'
})
export class AngularUniversalNavbarComponent {

  @Input() routes:any[] = [];
  @Input() position: 'left' | 'right' | 'top' = 'top';


}
