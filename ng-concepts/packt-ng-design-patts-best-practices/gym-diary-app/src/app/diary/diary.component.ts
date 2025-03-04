import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  exerciseList!: ExerciseSetList;

  constructor() {}

  ngOnInit(): void {
    this.route.data.subscribe(({ exerciseList }) => {
      // this.exerciseList = diaryApi.items;
      this.exerciseList = exerciseList;
    });
  }

  newList() {
    this.exerciseSetsService
      .refreshList()
      // .subscribe((dataAPI) => (this.exerciseList = dataAPI.items));
      .subscribe((exerciseList) => (this.exerciseList = exerciseList));
  }

  addExercise(newSet: ExerciseSet) {
    // this.router.navigate(['new-template']);
    this.router.navigate(['entry']);
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

  editEntry(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';

    this.router.navigate([`entry/${ id }`]);
  }
  // newRep(updateSet: ExerciseSet) {
  //   const id = updateSet.id ?? '';
  //
  //   this.exerciseSetsService
  //     .updateItem(id, updateSet)
  //     .subscribe();
  // }

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }
}

