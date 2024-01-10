import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {
  @Input() title?: string;
  @Input() isFirst: boolean = false;
}
