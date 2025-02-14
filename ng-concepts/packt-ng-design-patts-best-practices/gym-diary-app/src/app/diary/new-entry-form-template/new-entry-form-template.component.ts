import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ExerciseSet } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';

@Component({
  selector: 'app-new-entry-form-template',
  imports: [
    FormsModule,
    JsonPipe,
  ],
  templateUrl: './new-entry-form-template.component.html',
  styleUrl: './new-entry-form-template.component.css'
})
export class NewEntryFormTemplateComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  private titleService = inject(Title);
  entry: ExerciseSet = { date: new Date(), exercise: '', reps: 0, sets: 0 };

  ngOnInit(): void {
    this.titleService.setTitle('Template Form');
  }

  newEntry() {
    const new_entry = { ...this.entry };

    this.exerciseSetsService
      .addNewItem(new_entry)
      .subscribe((entry) => this.router.navigate(['']));
  }
}
