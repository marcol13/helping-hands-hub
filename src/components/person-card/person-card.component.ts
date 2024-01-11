import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { personCardData } from '../../interfaces/personCardData';
import { Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css',
})
export class PersonCardComponent {
  @Input() cardData!: personCardData;
}
