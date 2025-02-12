import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DiaryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
