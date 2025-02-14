import { JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ExerciseSetsService } from '../services/exercise-sets.service';
import { multipleValidator } from './custom-validation';

@Component({
  selector: 'app-new-entry-form-reactive',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    NgIf,
  ],
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrl: './new-entry-form-reactive.component.css'
})
export class NewEntryFormReactiveComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    reps: [0, [Validators.required, Validators.min(0), multipleValidator(3)]],
    sets: [0, [Validators.required, Validators.min(0), multipleValidator(2)]],
  });

  newEntry() {
    if (this.entryForm.valid) {
      const new_entry = { ...this.entryForm.value };

      console.log('new entry value:', new_entry);

      this.exerciseSetsService
        .addNewItem(new_entry)
        .subscribe((entry) => this.router.navigate(['']));
    }
  }
}
