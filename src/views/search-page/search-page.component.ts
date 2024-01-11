import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PersonCardComponent } from '../../components/person-card/person-card.component';
import { personCardData } from '../../interfaces/personCardData';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [PageComponent, FiltersComponent, PersonCardComponent, NgFor],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
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
