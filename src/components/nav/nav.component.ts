import { Component } from '@angular/core';
import { navItem } from '../../interfaces/navItems';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatDividerModule,
    MatListModule,
    RouterModule,
    NgFor,
    LogoComponent,
    UserMenuComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @Input() navItems: navItem[] = [
    // { name: 'Home', route: '/home' },
    { name: 'Match', route: '/match' },
    { name: 'About', route: '/about' },
    { name: 'Join', route: '/join' },
    { name: 'Contact', route: '/contact' },
  ];
}
