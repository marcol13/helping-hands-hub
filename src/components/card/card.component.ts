import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Input } from '@angular/core';
import { OpinionData } from '../../interfaces/opinionData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardData!: OpinionData;
}
