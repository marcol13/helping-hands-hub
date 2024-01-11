import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

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
    minAgeInput: new FormControl(50),
    maxAgeInput: new FormControl(110),
    hobbyInput: new FormControl(''),
    languageInput: new FormControl(''),
  });
  
  onClick(e: Event) {
    e.preventDefault();
    console.log(this.filtersForm.value)
  }

  hobbyVariants: string[] = [
    'Football',
    'Tennis',
    'Cooking',
    'Astronomy',
    'Games',
  ];

  languageVariants: string[] = [
    'English',
    'Spanish',
    'German',
    'French',
    'Russian',
  ];
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto' as FloatLabelType);
}
