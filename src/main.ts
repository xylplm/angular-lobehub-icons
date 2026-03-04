import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideLobehubIcons } from 'angular-lobehub-icons';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  IconAir,
  IconApi,
  IconArchive,
  IconGithub,
  IconWorld,
  IconArrowRight,
  IconCheck,
  IconSearch,
  IconStar,
  IconMail,
  IconDownload,
  IconSettings,
  IconCode,
  IconAlert,
  IconBook,
} from 'angular-lobehub-icons/icons';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideLobehubIcons({
      IconAir,
      IconApi,
      IconArchive,
      IconGithub,
      IconWorld,
      IconArrowRight,
      IconCheck,
      IconSearch,
      IconStar,
      IconMail,
      IconDownload,
      IconSettings,
      IconCode,
      IconAlert,
      IconBook,
    }),
    provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    }),
  ]
})
  .catch((err) => console.error(err));

