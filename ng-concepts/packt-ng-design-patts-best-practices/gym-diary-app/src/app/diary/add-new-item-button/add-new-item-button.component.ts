import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseSet } from '../interfaces/exercise-set';
import { literal } from '@angular/compiler';

@Component({
  selector: 'app-add-new-item-button',
  imports: [],
  templateUrl: './add-new-item-button.component.html',
  styleUrl: './add-new-item-button.component.css'
})
export class AddNewItemButtonComponent {
  @Output() newExerciseEvent = new EventEmitter<ExerciseSet>();

  addNewExercise() {
    const id = Date.now().toString();
    const date = new Date();
    const reps = 10;
    const sets = 4;
    const exercise = "Jumpropes";
    const newExerciseSet: ExerciseSet = { id, date, reps, sets, exercise };

    this.newExerciseEvent.emit(newExerciseSet);
  }
}
