import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularUniversalNavbarComponent, NavItem } from 'angular-universal-navbar';
import { LogoComponent } from './components/logo/logo.component';
import { UserComponent } from './components/user/user.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularUniversalNavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  
  navItems: NavItem[] = [
    {
      component: LogoComponent,
      styles: {
        marginLeft: '20px'
      },
      
    },
    {
      name: 'First',
      route: 'first',
      styles: {
        marginLeft: 'auto'
      },
    },
    {
      name: 'Second',
      children: [
        {
          name: 'Second First',
          route: 'second-first'
        },
        {
          name: 'Second Second',
          route: 'second-second'
        },
      ],
    },
    {
      name: 'Third',
      route: 'third'
    },
    {
      name: 'Fourth',
      route: 'fourth'
    },
    {
      name: 'Fifth',
      styles: {
        marginRight: 'auto'
      },
      classes: [
        'your-custom-class'
      ],
    },
    {
      component: SettingsComponent,
    },
    {
      component: UserComponent,
      componentData: {
        user: 'NV'
      }
    },

  ];
  sideItems: NavItem[] = [
    {
      name: 'First',
      route: 'first',
    },
    {
      name: 'Third',
      route: 'third'
    },
    {
      name: 'Fourth',
      route: 'fourth'
    },
    {
      name: 'Fifth',
    },


  ];

  //change navbar options at some point of time usefull when changeing screen size
  ngOnInit() { 
    setTimeout(() => {
      this.navItems = [
        {
          component: LogoComponent,
          styles: {
            marginLeft: '20px'
          },
          
        },
        {
          name: 'First',
          route: 'first',
          styles: {
            marginLeft: 'auto'
          },
        },
        {
          name: 'Second',
          children: [
            {
              name: 'Second First',
              route: 'second-first'
            },
            {
              name: 'Second Second',
              route: 'second-second'
            },
          ],
        },
        {
          name: 'Fifth',
          styles: {
            marginRight: 'auto'
          },
          classes: [
            'your-custom-class'
          ],
        },
        {
          component: SettingsComponent,
        },
        {
          component: UserComponent,
          componentData: {
            user: 'NV'
          }
        },
    
      ];
    }, 4000)
  }
}
