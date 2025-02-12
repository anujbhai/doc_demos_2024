import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Component, inject } from '@angular/core';
import { EntryItemComponent } from '../entry-item/entry-item.component';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
// import { ExerciseSet } from '../interfaces/exercise-set';
// import { ExerciseSetsService } from '../services/exercise-sets.service';

@Component({
  selector: 'app-list-entries',
  imports: [
    NgFor,
    EntryItemComponent,
  ],
  templateUrl: './list-entries.component.html',
  styleUrl: './list-entries.component.css'
})
export class ListEntriesComponent {
  // private exerciseSetsService = inject(ExerciseSetsService);
  // exerciseList = this.exerciseSetsService.getInitialList();
  @Input() exerciseList!: ExerciseSetList;
  @Output() newRepEvent = new EventEmitter<ExerciseSet>();
  @Output() deleteEvent = new EventEmitter<string>();

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}
