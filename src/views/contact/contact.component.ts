import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PageComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    nameInput: new FormControl(''),
    emailInput: new FormControl(''),
    typeInput: new FormControl(''),
    messageInput: new FormControl(''),
  });

  onClick(e: Event) {
    e.preventDefault();
  }
}
