import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, Renderer2, Type, ViewChild, ViewContainerRef, inject } from '@angular/core';
import {  RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavItem } from './universal-navbar-config';

@Component({
  selector: 'angular-universal-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavItemComponent, DropdownComponent],
  templateUrl: './angular-universal-navbar.component.html',
  styleUrl: './angular-universal-navbar.component.css'
})
export class AngularUniversalNavbarComponent implements AfterViewInit{

  _navItems: NavItem[] = [];
  _sideItems: NavItem[] = [];

  @Input() set navItems(items: NavItem[]){
    this._navItems = items;
    if(this.navbar){
      this.setNavbar();
    }
  }

  @Input() set sideItems(items: NavItem[]){
    this._sideItems = items;
    if(this.sidebar){
      this.setSidebar();
    }
  }

  @ViewChild('navbar', { read: ViewContainerRef }) navbar!: ViewContainerRef;
  @ViewChild('sidebar', { read: ViewContainerRef }) sidebar!: ViewContainerRef;
  renderer2 = inject(Renderer2);


  ngAfterViewInit(): void {
    this.setNavbar();
    this.setSidebar();
  }

  setNavbar(){
    if(!this.navbar) return;

    this.navbar.clear();
    this._navItems.forEach(item => {
      let componentRef: any;
      if(item.component){
        componentRef = this.navbar.createComponent(item.component);
        if(item.componentData){
          Object.keys(item.componentData).forEach(key => {
            componentRef.instance[key] = item.componentData[key];
          });
        }
      }
      else if(item.children && item.name && item.children.length > 0){
        componentRef = this.navbar.createComponent(DropdownComponent);
        componentRef.instance.name = item.name;
        componentRef.instance.items = item.children;
      }
      else if(item.name) {
        componentRef = this.navbar.createComponent(NavItemComponent);
        componentRef.instance.item = item;
      }

      if (item.classes) {
        item.classes.forEach(className => this.renderer2.addClass(componentRef.location.nativeElement, className));
      }

      if (item.styles) {
        Object.keys(item.styles).forEach(styleName => {
          if(item.styles){
            this.renderer2.setStyle(componentRef.location.nativeElement, styleName, item.styles[styleName]);
          }
        });
      }
      componentRef.changeDetectorRef.detectChanges();
    });
  }

  setSidebar(){
    if(!this.sidebar) return;

    this.sidebar.clear();
    this._sideItems.forEach(item => {
      let componentRef: any;
      if(item.component){
        componentRef = this.sidebar.createComponent(item.component);
        if(item.componentData){
          Object.keys(item.componentData).forEach(key => {
            componentRef.instance[key] = item.componentData[key];
          });
        }
      }
      else if(item.children && item.name && item.children.length > 0){
        componentRef = this.sidebar.createComponent(DropdownComponent);
        componentRef.instance.name = item.name;
        componentRef.instance.items = item.children;
      }
      else if(item.name) {
        componentRef = this.sidebar.createComponent(NavItemComponent);
        componentRef.instance.item = item;
      }

      if (item.classes) {
        item.classes.forEach(className => this.renderer2.addClass(componentRef.location.nativeElement, className));
      }

      if (item.styles) {
        Object.keys(item.styles).forEach(styleName => {
          if(item.styles){
            this.renderer2.setStyle(componentRef.location.nativeElement, styleName, item.styles[styleName]);
          }
        });
      }
      componentRef.changeDetectorRef.detectChanges();
    });
  }
}
