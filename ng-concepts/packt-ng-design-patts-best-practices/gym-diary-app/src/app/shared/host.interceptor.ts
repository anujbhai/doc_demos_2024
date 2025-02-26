import { HttpInterceptorFn } from '@angular/common/http';

export const hostInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'http://localhost:3000';

  // Check for request with already full URL
  if (req.url.startsWith('http')) {
    return next(req);
  }

  // Clone the request with new full URL
  const updatedReq = req.clone({
    url: `${baseUrl}/${req.url}`
  });

  return next(updatedReq);
};
