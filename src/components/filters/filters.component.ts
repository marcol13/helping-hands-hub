import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatDividerModule,
    TitleCasePipe
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  formatKm(value: number) {
    return value + 'km';
  }

  filtersForm = new FormGroup({
    nameInput: new FormControl(''),
    distanceInput: new FormControl(20),
    minAgeInput: new FormControl(20),
    maxAgeInput: new FormControl(110),
    hobbyInput: new FormControl(''),
    languageInput: new FormControl(''),
  });
  
  onClick(e: Event) {
    e.preventDefault();
    console.log(this.filtersForm.value)
  }

  @Input() hobbyVariants!: string[];
  @Input() assistanceVariants!: string[];
}
