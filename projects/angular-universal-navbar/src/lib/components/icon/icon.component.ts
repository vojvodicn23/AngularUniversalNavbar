import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
