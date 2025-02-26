import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadService } from './load.service';
import { finalize } from 'rxjs';

export const loadInterceptor: HttpInterceptorFn = (req, next) => {
  const loadService = inject(LoadService);

  // Check if req header has 'X-LOADING' set to false
  if (req.headers.get('X-LOADING') === 'false') {
    return next(req);
  }

  loadService.showLoader();

  return next(req).pipe(finalize(() => loadService.hideLoader()));
};
