import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface HeroData {
  id?: string;
  name: string;
  power: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  private heroData: HeroData[] = [
    { id: 'abc123', name: 'Mr. Hero', power: 'normal' },
  ];

  constructor() { }

  getHero(heroId: string): Observable<HeroData | undefined> {
    const hero = this.heroData.find((h) => h.id === heroId);

    return of(hero);
  }
}
