import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideLobehubIcons } from 'angular-lobehub-icons';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  IconGithub,
  IconOpenai,
  IconClaude,
  IconGooglecloud,
  IconLobehub,
  IconLobehubColor,
  IconNotebooklm,
  IconSpark,
  IconFigma,
  IconAws,
  IconAzure,
  IconMicrosoft,
  IconGoogle,
  IconDeepseek,
} from 'angular-lobehub-icons/icons';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideLobehubIcons({
      IconGithub,
      IconOpenai,
      IconClaude,
      IconGooglecloud,
      IconLobehub,
      IconLobehubColor,
      IconNotebooklm,
      IconSpark,
      IconFigma,
      IconAws,
      IconAzure,
      IconMicrosoft,
      IconGoogle,
      IconDeepseek,
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

