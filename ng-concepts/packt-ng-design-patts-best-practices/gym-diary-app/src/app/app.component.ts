import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntryItemComponent } from './diary/entry-item/entry-item.component';
import { ExerciseSet, ExerciseSetList } from './diary/interfaces/exercise-set';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    EntryItemComponent,
    NgFor,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  exerciseList: ExerciseSetList = [
    { id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
    { id: '2', date: new Date(), exercise: 'Parallel bar dips', reps: 15, sets: 3 },
    { id: '3', date: new Date(), exercise: 'Pull ups', reps: 10, sets: 3 },
  ];

  newList() {
    this.exerciseList = [
      { id: '1', date: new Date(), exercise: 'Deadlift', reps: 15, sets: 3 },
      { id: '2', date: new Date(), exercise: 'Parallel bar dips', reps: 15, sets: 3 },
      { id: '3', date: new Date(), exercise: 'Pull ups', reps: 10, sets: 3 },
      { id: '4', date: new Date(), exercise: 'Jumping jacks', reps: 30, sets: 1 },
    ];
  }

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}
