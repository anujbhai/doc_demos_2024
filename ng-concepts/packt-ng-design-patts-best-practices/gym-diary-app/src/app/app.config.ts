import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr, ToastrModule } from 'ngx-toastr';

import { routes } from './app.routes';
import { authInterceptor } from './login/auth.interceptor';
import { hostInterceptor } from './shared/host.interceptor';
import { loadInterceptor } from './loading-overlay/load.interceptor';
import { notificationInterceptor } from './notification/notification.interceptor';
import { telemetryInterceptor } from './telemetry/telemetry.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      })
    ),
    provideToastr(),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        hostInterceptor,
        notificationInterceptor,
        loadInterceptor,
        telemetryInterceptor,
      ])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
  ]
};
