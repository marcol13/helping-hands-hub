import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { JoinComponent } from '../views/join/join.component';
import { AboutComponent } from '../views/about/about.component';
import { ContactComponent } from '../views/contact/contact.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { VisitsComponent } from '../views/visits/visits.component';
import { FavouritesComponent } from '../views/favourites/favourites.component';
import { SearchPageComponent } from '../views/search-page/search-page.component';

export const routes: Routes = [
  { path: 'match', component: SearchPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join', component: JoinComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'visits', component: VisitsComponent },
  { path: 'favourites', component: FavouritesComponent },
  {
    path: '',
    component: HomeComponent,
  },
];
