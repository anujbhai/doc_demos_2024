import { Routes } from '@angular/router';

import { DiaryComponent } from './diary/diary.component';
import { NewEntryFormTemplateComponent } from './diary/new-entry-form-template/new-entry-form-template.component';
import { NewEntryFormReactiveComponent } from './diary/new-entry-form-reactive/new-entry-form-reactive.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { authGuard } from './login/auth.guard';
import { diaryResolver, entryResolver } from './diary/diary.resolver';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DiaryComponent,
        title: 'Diary',
        resolve: { diaryApi: diaryResolver },
      },
      {
        path: 'new-template',
        component: NewEntryFormTemplateComponent,
      },
      {
        path: 'entry',
        component: NewEntryFormReactiveComponent,
        title: 'Entry Form',
      },
      {
        path: 'entry/:id',
        component: NewEntryFormReactiveComponent,
        title: 'Edit Entry',
        resolve: { entry: entryResolver },
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.routes').then((m) => m.loginRoutes),
  },
  {
    path: '**', component: ErrorPageComponent,
  },
];
