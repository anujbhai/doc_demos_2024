import { Component, inject, OnInit } from "@angular/core";

// import { ExerciseSet, ExerciseSetList } from "./interfaces/exercise-set";
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
  exerciseList!: ExerciseSetList;
  // exerciseList = this.exerciseSetsService.getInitialList();

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
    this.exerciseSetsService
      .addNewItem(newSet)
      .subscribe((_) => this.newList);
  }

  deleteItem(id: string) {
    this.exerciseSetsService
      .deleteItem(id)
      .subscribe(() => {
        this.exerciseList = this.exerciseList.filter(
          (exerciseSet) => exerciseSet.id === id
        );
      });
  }

  newRep(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';

    this.exerciseSetsService
      .updateItem(id, updateSet)
      .subscribe();
  }

  // newList() {
  //   this.exerciseList = this.exerciseSetsService.refreshList();
  // }

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }

  // addExercise(newSet: ExerciseSet) {
  //   this.exerciseList = this.exerciseSetsService.addNewItem(newSet);
  // }

  // deleteItem(id: string) {
  //   this.exerciseList = this.exerciseList.filter((item) => item.id !== id);
  // }

  // newRep(exerciseSet: ExerciseSet) {
  //   const id = exerciseSet.id;
  //   const i = this.exerciseList.findIndex((item) => item.id === id);

  //   if (i >= 0) {
  //     this.exerciseList[i] = { ...exerciseSet };
  //   }
  // }
}

