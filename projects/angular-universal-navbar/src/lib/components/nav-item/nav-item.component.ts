import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { NavItem } from '../../universal-navbar-config';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-item',
  standalone: true,
  imports: [CommonModule, IconComponent,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {

  @Input() item: NavItem | undefined;
  @Input() showIcon = false;
  @Input() isOpen = false;
  @Input() isSelected = false;
}
