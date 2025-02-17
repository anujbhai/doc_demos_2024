import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeroData, HeroServiceService } from './hero-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'route-app';
  // @Input()
  // set id(heroId: string) {
  //   this.hero$ = this.service.getHero(heroId);
  // }

  hero$!: Observable<HeroData | undefined>;
  private heroId: string = '';

  constructor(private service: HeroServiceService) {}

  changeHero(heroId: string) {
    this.heroId = heroId;
    this.hero$ = this.service.getHero(this.heroId);
  }
}
