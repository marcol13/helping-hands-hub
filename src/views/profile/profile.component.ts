import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { personCardData } from '../../interfaces/personCardData';
import { Input } from '@angular/core';
import { PersonCardComponent } from '../../components/person-card/person-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PageComponent,
    MatListModule,
    MatButtonModule,
    PersonCardComponent,
    NgFor,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() cardsData: personCardData[] = [
    {
      id: 1,
      image: 'assets/images/man-1.jpg',
      name: 'John Doe',
      age: 80,
      location: 'London, UK',
      distance: 5.2,
      help: ['Food', 'Medicine', 'Time'],
      hobby: ['Football', 'Tennis', 'Cooking'],
      language: ['English', 'Spanish', 'German'],
      match: 70,
    },
    {
      id: 2,
      image: 'assets/images/man-1.jpg',
      name: 'Jane Doe',
      age: 82,
      location: 'London, UK',
      distance: 10.2,
      help: ['Food', 'Medicine', 'Time'],
      hobby: ['Football', 'Tennis', 'Cooking'],
      language: ['English', 'Spanish', 'German'],
      match: 50,
    },
  ];
}
