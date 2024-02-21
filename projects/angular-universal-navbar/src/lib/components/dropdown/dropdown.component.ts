import { Component, ElementRef, HostListener, Input, inject } from '@angular/core';
import { NavItem } from '../../universal-navbar-config';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [IconComponent,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  @Input() items: NavItem[] = [];
  @Input() name = '';

  isOpen = false;
  el = inject(ElementRef);

  @HostListener('document:click', ['$event']) onHostClick(event: MouseEvent) {
    if(this.isOpen) {
      const dropdown = this.el.nativeElement.querySelector('.universal-navbar-dropdown-content');
      dropdown.style.display = 'none';
      this.isOpen = false;
    }
    else if(this.el.nativeElement.contains(event.target)){
      this.openDropdown();
    }
  }
  openDropdown(){
    if(!this.isOpen){
      const rect = this.el.nativeElement.getBoundingClientRect();
      const buttonX = rect.left + window.scrollX;
      const buttonY = rect.top + window.scrollY;

      const dropdown = this.el.nativeElement.querySelector('.universal-navbar-dropdown-content');
      dropdown.style.display = 'block';
      this.isOpen = true;
      const dropdownWidth = dropdown.offsetWidth;
      const rightWidth = window.innerWidth - buttonX;

      dropdown.style.top = `${buttonY + 30 + 5}px`;

      if(rightWidth > dropdownWidth){
        dropdown.style.left = `${buttonX}px`;
      }
      else{
        dropdown.style.left = `${buttonX - (dropdownWidth - rightWidth)}px`;
      }
      //console.log(buttonX, buttonY)
    }
  }


}
