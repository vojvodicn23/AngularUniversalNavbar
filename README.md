# Angular Universal Navbar

Suported Angular versions: 17.
![example](image.png)

[Click here to try it on StackBlitz](https://stackblitz.com/edit/stackblitz-starters-f3b24p)


## Usage
Add the package as a dependency to your project using:

```
npm install angular-universal-navbar

```

Add module to you app.module imports:

```typescript
import { AngularUniversalNavbarComponent, NavItem } from 'angular-universal-navbar';
...
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularUniversalNavbarComponent],
  ...
})
```

Define navbar items in the component:

```typescript

items: NavItem[] = [
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

```

In the component template add selector and pass the navbar items.
Also, inside selector add router-outlet or any app content you wish.

```html

<angular-universal-navbar
    [items]="items"
>
    <router-outlet></router-outlet>
</angular-universal-navbar>

```

Navitem is defined as follows. 

```typescript

export interface NavItem {
    name?: string;
    route?: string;
    children?: NavItem[]; 
    component?: Type<any>;
    componentData?: any;
    styles?: {[key: string]: string};
    classes?: string[];
}

```

There are three possible options: 

1.  Define only name and route which will result as default navbar item as a text field:
```typescript
    {
      name: 'Third',
      route: 'third'
    },
```

2.  Define name and its children and it will result as dropdown:
```typescript
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
```

3.  Create custom component and render it inside navbar.
```typescript
    {
      component: UserComponent,
      componentData: {
        user: 'NV'
      }
    },
```
You are able to pass date to custom component, shown above which is equivalent to this: 
```html

<app-user
    user="NV"
/>
```


For all options, you are able to pass custom classes and styles:
```typescript
    {
      name: 'Fifth',
      styles: {
        marginRight: 'auto'
      },
      classes: [
        'your-custom-class'
      ],
    },
```