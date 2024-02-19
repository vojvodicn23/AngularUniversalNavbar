import { Component } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [NavItemComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

}
