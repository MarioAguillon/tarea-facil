import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // Tu componente principal

// 1. IMPORTACIONES DE LA IMAGEN
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';

// 2. REGISTRO DEL IDIOMA
registerLocaleData(localeEs, 'es');

// 3. ARRANQUE CON PROVIDERS
bootstrapApplication(App, {
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ]
}).catch((err) => console.error(err));