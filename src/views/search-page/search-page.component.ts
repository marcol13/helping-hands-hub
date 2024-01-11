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

  home_lat = 52.406376;
  home_long = 16.925167;

  ngOnInit() {
    this.fetchData();
  }

  countDistance(lat1: number, long1: number, lat2: number, long2: number) {
    return parseFloat(
      (
        Math.acos(
          Math.sin(lat1) * Math.sin(lat2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.cos(long2 - long1)
        ) * 6371
      ).toFixed(2)
    );
  }

  fetchData() {
    this.httpClient
      .get('/persons')
      .subscribe((data: any) => {
        this.data = Object.values(data).map((el: any, idx) => ({
          id: idx + 1,
          image: `assets/images/people/person_${idx + 1}.jpg`,
          distance: Math.round(this.countDistance(
            this.home_lat,
            this.home_long,
            el.coordinates_of_city[0],
            el.coordinates_of_city[1]
          ) / 1000),
          ...el,
        }));
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

          this.cardsData = this.data.map((el: any) => ({
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
        });
      });
  }
}
