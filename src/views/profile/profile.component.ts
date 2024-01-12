import { Component, inject, OnInit } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Input } from '@angular/core';
import { PersonCardComponent } from '../../components/person-card/person-card.component';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { countDistance } from '../../utils/methods';
import { HOME_LAT, HOME_LONG } from '../../utils/const';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    PageComponent,
    MatListModule,
    MatButtonModule,
    PersonCardComponent,
    NgFor,
    HttpClientModule,
    TitleCasePipe,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  @Input() cardData!: any;
  @Input() recommendationData!: any[];
  @Input() reservationDates: string[] = [
    '🕐 12:30 📆 13.01',
    '🕐 12:50 📆 14.01',
    '🕐 13:00 📆 15.01',
    '🕐 13:30 📆 16.01',
    '🕐 13:40 📆 17.01',
    '🕐 14:00 📆 18.01',
    '🕐 14:30 📆 19.01',
    '🕐 15:00 📆 20.01',
  ];

  httpClient = inject(HttpClient);
  data: any[] = [];
  id: number = 1;

  reserve(e: Event) {
    const text = (e.target as HTMLElement).innerText;
    this.reservationDates = this.reservationDates.filter((el) => el !== text);

    this._snackBar.open(`Reservation made: ${text}`, "Close");
  }

  constructor(private _snackBar: MatSnackBar, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('/persons')
      .subscribe((data: any) => {
        const cardsData = Object.values(data).map((el: any, idx) => ({
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

        this.data = cardsData;

        this.cardData = cardsData.filter((el) => el.id === this.id)[0];
      })
      .add(() => {
        this.httpClient.get('/predict').subscribe((data: any) => {
          this.data = this.data.map((el, idx) => ({
            predict: Math.round(data[idx + 1] * 100),
            ...el,
          }));
          this.data = this.data
            .sort((a, b) => b.predict - a.predict)
            .filter((el) => el.id !== this.id)
            .slice(0, 4);

          this.recommendationData = this.data.map((el: any) => ({
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
