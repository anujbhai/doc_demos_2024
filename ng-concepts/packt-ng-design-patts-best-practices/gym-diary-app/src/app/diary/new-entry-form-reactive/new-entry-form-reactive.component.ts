import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';

import { ExerciseSetsService } from '../services/exercise-sets.service';
import { multipleValidator } from './custom-validation';
import { ExerciseSet } from '../interfaces/exercise-set';
import { routes } from '../../app.routes';
import { ExercisesService } from '../services/exercises.service';

const DEBOUNCE_TIME = 300;

@Component({
  selector: 'app-new-entry-form-reactive',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    // NgIf,
    CommonModule,
  ],
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrl: './new-entry-form-reactive.component.css'
})
export class NewEntryFormReactiveComponent implements OnInit {
  @Input('id') entryId?: string;

  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute)

  // search
  private exerciseService = inject(ExercisesService);
  public showSuggestions: boolean = false;

  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    reps: [0, [Validators.required, Validators.min(0), multipleValidator(3)]],
    sets: [0, [Validators.required, Validators.min(0), multipleValidator(2)]],
  });

  // public exercises$ = this.exerciseService.getExercises();
  public exercises$ = this.entryForm.valueChanges.pipe(
    debounceTime(DEBOUNCE_TIME),
    map((model) => model?.exercise ?? ''),
    filter((exercise) => exercise.length >= 3),
    distinctUntilChanged(),
    switchMap((exercise) => this.exerciseService.getExercises(exercise)),
  );

  ngOnInit(): void {
    this.entryForm.valueChanges.subscribe((model) => console.log(model));
    if (this.entryId) {
      // this.exerciseSetsService
      //   .getItem(this.entryId)
      //   .subscribe((entry) => this.updateForm(entry));
      this.route.data.subscribe(({ entry }) => {
        this.updateForm(entry);
      });
    }
  }

  newEntry() {
    if (this.entryForm.valid) {
      const new_entry = { ...this.entryForm.value };

      if (this.entryId) {
        this.exerciseSetsService
          .updateItem(this.entryId, new_entry)
          .subscribe((entry) => this.router.navigate(['']))
      } else {
        this.exerciseSetsService
          .addNewItem(new_entry)
          .subscribe((entry) => this.router.navigate(['']));
      }
    }
  }

  updateForm(entry: ExerciseSet): void {
    let { id: _, ...entryForm } = entry;

    this.entryForm.setValue(entryForm);
  }

  selectExercise(suggestion: string) {
    this.entryForm.get('exercise')?.setValue(suggestion);
    this.toggleSuggestions(false);
  }

  toggleSuggestions(turnOn: boolean) {
    this.showSuggestions = turnOn;
  }
}
