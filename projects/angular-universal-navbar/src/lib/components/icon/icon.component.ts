import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {

  
  @Input() color = 'black';
  @Input() icon = '';
  @Input() width = 20; 
  @Input() height = 20; 

  @HostBinding('style.width') get styleWidth(): string {
    return this.width + 'px';
  }

  @HostBinding('style.height') get styleHeight(): string {
    return this.height + 'px';
  }
}
