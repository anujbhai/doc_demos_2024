import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ExerciseSet, ExerciseSetList } from "./interfaces/exercise-set";
import { ListEntriesComponent } from "./list-entries/list-entries.component";
import { AddNewItemButtonComponent } from "./add-new-item-button/add-new-item-button.component";
import { ExerciseSetsService } from "./services/exercise-sets.service";

@Component({
  selector: 'app-diary',
  imports: [
    ListEntriesComponent,
    AddNewItemButtonComponent,
  ],
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
  providers: [ExerciseSetsService],
})
export class DiaryComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  exerciseList!: ExerciseSetList;

  constructor() {}

  ngOnInit(): void {
    this.exerciseSetsService
      .getInitialList()
      .subscribe((dataAPI) => (this.exerciseList = dataAPI.items));
  }

  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe((dataAPI) => (this.exerciseList = dataAPI.items));
  }

  addExercise(newSet: ExerciseSet) {
    // this.router.navigate(['new-template']);
    this.router.navigate(['new-reactive']);
  }

  deleteItem(id: string) {
    console.log('clicked delete id:', id);
    this.exerciseSetsService
      .deleteItem(id)
      .subscribe(() => {
        this.exerciseList = this.exerciseList.filter(
          (exerciseSet) => exerciseSet.id !== id
        );
      });
  }

  newRep(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';

    this.exerciseSetsService
      .updateItem(id, updateSet)
      .subscribe();
  }

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}

