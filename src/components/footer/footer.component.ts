import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Input } from '@angular/core';
import { footerData } from '../../interfaces/footerData';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() footerData: footerData = {
    contact: [
      {
        name: 'E-mail',
        data: 'example@example.com',
      },
      {
        name: 'Phone',
        data: '123456789',
      },
      {
        name: 'Address',
        data: '123 Main Street, City, Country',
      },
    ],
    links: [
      {
        name: 'About Us',
        route: '/about',
      },
      {
        name: 'Contact Us',
        route: '/contact',
      },
      {
        name: 'Join us',
        route: '/join-us',
      },
    ],
    terms: [
      {
        name: 'Terms & Conditions',
        route: '/terms',
      },
      {
        name: 'Privacy Policy',
        route: '/privacy',
      },
    ],
    social: [
      {
        name: 'Facebook',
        route: 'https://www.facebook.com',
        icon: 'facebook',
      },
      {
        name: 'Twitter',
        route: 'https://www.twitter.com',
        icon: 'twitter',
      },
      {
        name: 'Instagram',
        route: 'https://www.instagram.com',
        icon: 'instagram',
      },
    ],
  };
}
