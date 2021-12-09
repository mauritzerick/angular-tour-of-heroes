import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Kidding' },
      { id: 12, name: 'Embrace' },
      { id: 13, name: 'Problem' },
      { id: 14, name: 'Respect' },
      { id: 15, name: 'Fam' },
      { id: 16, name: 'Differences' },
      { id: 17, name: 'Respect' },
      { id: 18, name: 'All-In' },
      { id: 19, name: 'Role' },
      { id: 20, name: 'Customer' },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}