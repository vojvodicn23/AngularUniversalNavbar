import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  isOpen = false;
  el = inject(ElementRef);

  @HostListener('document:click', ['$event']) onHostClick(event: MouseEvent) {
    if(this.isOpen) {
      const dropdown = this.el.nativeElement.querySelector('.settings-content');
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

      const dropdown = this.el.nativeElement.querySelector('.settings-content');
      dropdown.style.display = 'block';
      this.isOpen = true;
      const dropdownWidth = dropdown.offsetWidth;
      const rightWidth = window.innerWidth - buttonX;

      dropdown.style.top = `${buttonY + 30 + 15}px`;

      if(rightWidth > dropdownWidth){
        dropdown.style.left = `${buttonX}px`;
      }
      else{
        dropdown.style.left = `${buttonX - (dropdownWidth - rightWidth) - 5}px`;
      }
      //console.log(buttonX, buttonY)
    }
  }
}
