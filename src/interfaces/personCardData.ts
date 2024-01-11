type help = 'Food' | 'Medicine' | 'Time';
type hobby = 'Football' | 'Tennis' | 'Cooking';
type language = 'English' | 'Spanish' | 'German';

export interface personCardData {
  id: number;
  image: string;
  name: string;
  age: number;
  location: string;
  distance: number;
  help: help[];
  hobby: hobby[];
  language: language[];
  match: number;
}
