import { Routes } from '@angular/router';

import { DiaryComponent } from './diary/diary.component';
import { NewEntryFormTemplateComponent } from './diary/new-entry-form-template/new-entry-form-template.component';
import { NewEntryFormReactiveComponent } from './diary/new-entry-form-reactive/new-entry-form-reactive.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DiaryComponent,
  },
  {
    path: 'new-template',
    component: NewEntryFormTemplateComponent,
  },
  {
    path: 'new-reactive',
    component: NewEntryFormReactiveComponent,
    title: 'Entry Form',
  },
  {
    path: '**', component: ErrorPageComponent,
  },
];
