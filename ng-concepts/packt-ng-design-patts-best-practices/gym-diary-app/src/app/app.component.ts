import { Component } from '@angular/core';
import { DiaryComponent } from './diary/diary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
