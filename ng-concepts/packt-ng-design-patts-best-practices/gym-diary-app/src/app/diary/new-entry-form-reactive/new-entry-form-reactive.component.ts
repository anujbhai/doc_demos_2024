import { JsonPipe, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ExerciseSetsService } from '../services/exercise-sets.service';
import { multipleValidator } from './custom-validation';
import { ExerciseSet } from '../interfaces/exercise-set';
import { routes } from '../../app.routes';

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
export class NewEntryFormReactiveComponent implements OnInit {
  @Input('id') entryId?: string;

  private formBuilder = inject(NonNullableFormBuilder);
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute)
  public entryForm = this.formBuilder.group({
    date: [new Date(), Validators.required],
    exercise: ['', Validators.required],
    reps: [0, [Validators.required, Validators.min(0), multipleValidator(3)]],
    sets: [0, [Validators.required, Validators.min(0), multipleValidator(2)]],
  });

  ngOnInit(): void {
    if (this.entryId) {
      this.exerciseSetsService
        .getItem(this.entryId)
        .subscribe((entry) => this.updateForm(entry));
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
}
