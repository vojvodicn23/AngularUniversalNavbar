import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, inject } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() user = '';

  isOpen = false;
  el = inject(ElementRef);

  @HostListener('document:click', ['$event']) onHostClick(event: MouseEvent) {
    if(this.isOpen) {
      const dropdown = this.el.nativeElement.querySelector('.user-content');
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

      const dropdown = this.el.nativeElement.querySelector('.user-content');
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
