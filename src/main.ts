import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Cambiamos AppComponent por App

bootstrapApplication(App, appConfig) // Usamos App aquí también
  .catch((err: any) => console.error(err));