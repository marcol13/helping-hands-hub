import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { FiltersComponent } from '../../components/filters/filters.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [PageComponent, FiltersComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

}
