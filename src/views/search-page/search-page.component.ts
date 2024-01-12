import { Component, inject } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { PersonCardComponent } from '../../components/person-card/person-card.component';
import { personCardData } from '../../interfaces/personCardData';
import { Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { countDistance } from '../../utils/methods';
import { HOME_LAT, HOME_LONG } from '../../utils/const';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    PageComponent,
    FiltersComponent,
    PersonCardComponent,
    NgFor,
    HttpClientModule,
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent implements OnInit {
  @Input() cardsData: personCardData[] = [];

  httpClient = inject(HttpClient);
  data: any[] = [];
  ids: number[] = [];
  hobbys: string[] = [];
  assistance: string[] = [];
  filteredData: any[] = [];

  makeCard(data: any) {
    return data.map((el: any) => ({
      id: el.id,
      image: el.image,
      name: el.name,
      age: el.age,
      location: el.location,
      distance: el.distance,
      help: el.type_of_assistance,
      hobby: el.hobby,
      language: el.communication_language,
      match: el.predict,
    }));
  }

  applyFilters(filters: any) {
    console.log(this.filteredData);
    const haveAny = (origin: string[], filter: string[]) => {
      return origin.some((el) => filter.includes(el));
    };

    this.filteredData = this.data.filter((el) => {
      const matchFilters = {
        name: el.name.includes(filters.nameInput),
        distance: el.distance <= filters.distanceInput,
        age: el.age >= filters.minAgeInput && el.age <= filters.maxAgeInput,
        hobby:
          filters.hobbyInput === '' ||
          filters.hobbyInput?.length === 0 ||
          haveAny(el.hobby, filters.hobbyInput),
        assistance:
          filters.assistanceInput === '' ||
          filters.assistanceInput?.length === 0 ||
          haveAny(el.type_of_assistance, filters.assistanceInput),
      };

      console.log(matchFilters);

      return Object.values(matchFilters).every((el) => el === true);
    });

    this.cardsData = this.makeCard(this.filteredData);
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('/persons')
      .subscribe((data: any) => {
        this.data = Object.values(data).map((el: any, idx) => ({
          id: idx + 1,
          image: `assets/images/people/person_${idx + 1}.jpg`,
          distance: Math.round(
            countDistance(
              HOME_LAT,
              HOME_LONG,
              el.coordinates_of_city[0],
              el.coordinates_of_city[1]
            ) / 1000
          ),
          ...el,
        }));

        this.filteredData = this.data;

        this.hobbys = Array.from(
          new Set(this.data.map((item: any) => item.hobby).flat()).values()
        );
        this.assistance = Array.from(
          new Set(
            this.data.map((item: any) => item.type_of_assistance).flat()
          ).values()
        );
      })
      .add(() => {
        this.httpClient.get('/predict').subscribe((data: any) => {
          this.data = this.data.map((el, idx) => ({
            predict: Math.round(data[idx + 1] * 100),
            ...el,
          }));
          this.data = this.data.sort((a, b) => b.predict - a.predict); // Sort in descending order

          this.cardsData = this.makeCard(this.data);
        });
      });
  }
}
