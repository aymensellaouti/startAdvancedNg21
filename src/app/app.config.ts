import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withXhr
} from "@angular/common/http";
import { provideServiceWorker } from "@angular/service-worker";
import { provideToastr } from "ngx-toastr";

import { routes } from "./app.routes";
import { AuthInterceptorProvider } from "./auth/interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    // Depuis Angular 21, bootstrapApplication est zoneless par défaut :
    // on garde zone.js explicitement, comme dans le projet d'origine.
    provideZoneChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    AuthInterceptorProvider,
    provideToastr(),
    provideServiceWorker("ngsw-worker.js", {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],
};
