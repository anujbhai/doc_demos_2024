import { Component, Input, OnInit } from '@angular/core';
import { HeroData, HeroServiceService } from '../hero-service.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    CommonModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  @Input() id!: string;
  hero$!: Observable<HeroData | undefined>;

  constructor(private service: HeroServiceService) {}

  ngOnInit(): void {
      this.hero$ = this.service.getHero(this.id);
  }
}
