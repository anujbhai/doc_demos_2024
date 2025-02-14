import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ExerciseSet } from '../interfaces/exercise-set';

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
  @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  delete() {
    console.log('clicked delete id:', this.exerciseSet.id);
    this.deleteEvent.emit(this.exerciseSet.id);
  }

  newRep() {
    const reps = ++this.exerciseSet.reps;
    const newItem: ExerciseSet = {
      ...this.exerciseSet,
      reps,
    };

    this.newRepEvent.emit(newItem);
  }
}
