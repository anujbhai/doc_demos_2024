import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { ExerciseSet, ExerciseSetListAPI } from './interfaces/exercise-set';
import { ExerciseSetsService } from './services/exercise-sets.service';

export const diaryResolver: ResolveFn<ExerciseSetListAPI> = (route, state) => {
  const exerciseSetsService = inject(ExerciseSetsService);
  return exerciseSetsService.getInitialList();
};

export const entryResolver: ResolveFn<ExerciseSet> = (route, state) => {
  const entryId = route.paramMap.get('id')!;
  const exerciseSetsService = inject(ExerciseSetsService);

  return exerciseSetsService.getItem(entryId)
};
