import { Component } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [PageComponent, MatTabsModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css',
})
export class JoinComponent {}
