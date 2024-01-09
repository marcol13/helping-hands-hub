import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { userMenuItem } from '../../interfaces/userMenuItems';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, NgFor],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css',
})
export class UserMenuComponent {
  @Input() userMenuItems: userMenuItem[] = [
    { label: 'Profile', route: '/profile', icon: 'person' },
    {
      label: 'Visits',
      route: '/visits',
      icon: 'house',
    },
    {
      label: 'Favourites',
      route: '/favourites',
      icon: 'favorite',
    },
    {
      label: 'Logout',
      route: '/logout',
      icon: 'logout',
    },
  ];
}
