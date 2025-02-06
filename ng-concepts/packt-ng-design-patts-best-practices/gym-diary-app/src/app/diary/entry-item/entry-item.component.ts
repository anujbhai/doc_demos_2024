import { Component, Input } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entry-item',
  imports: [
    DatePipe,
  ],
  templateUrl: './entry-item.component.html',
  styleUrl: './entry-item.component.css'
})
export class EntryItemComponent {
  @Input('exercise-set') exerciseSet!: ExerciseSet;
}
