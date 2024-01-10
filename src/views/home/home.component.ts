import { Component, Input } from '@angular/core';
import { PageComponent } from '../../components/page/page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../components/card/card.component';
import { OpinionData } from '../../interfaces/opinionData';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageComponent, NgFor, MatIconModule, CardComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() cardData: OpinionData[] = [
    {
      name: 'John Doe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, ipsum vitae aliquam tincidunt, quam libero aliquet dolor, ut ultricies nisl nibh vel nisl. Vivamus non nisl at nisi aliquet tincidunt. Donec euismod, nisl non aliquet aliquam, felis massa cursus justo, vitae aliquam nisl velit ac nisl. Donec euismod, nisl non aliquet aliquam, felis massa cursus justo, vitae aliquam nisl velit ac nisl.',
      image: 'assets/images/man-1.jpg',
    },
    {
      name: 'Jane Doe',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, ipsum vitae aliquam tincidunt, quam libero aliquet dolor, ut ultricies nisl nibh vel nisl. Vivamus non nisl at nisi aliquet tincidunt. Donec euismod, nisl non aliquet aliquam, felis massa cursus justo, vitae aliquam nisl velit ac nisl. Donec euismod, nisl non aliquet aliquam, felis massa cursus justo, vitae aliquam nisl velit ac nisl.',
      image: 'assets/images/woman-1.jpg',
    },
    {
      name: 'John Travolta',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, ipsum vitae aliquam tincidunt, quam libero aliquet dolor, ut ultricies nisl nibh vel nisl. Vivamus non nisl at nisi aliquet tincidunt. Donec euismod, nisl non aliquet aliquam, felis massa cursus justo, vitae aliquam nisl velit ac nisl. Donec euismod, nisl non aliquet aliquam, felis massa cursus justo, vitae aliquam nisl velit ac nisl.',
      image: 'assets/images/man-2.jpg',
    },
  ];
}
