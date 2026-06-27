import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { TranslateService } from '@ngx-translate/core';
import { t } from './i18n/translate-signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LobehubIconComponent, RouterModule],
})
export class AppComponent {
  readonly navPages = ['home', 'docs', 'examples'] as const;

  private readonly translate = inject(TranslateService);

  readonly currentLang = this.translate.currentLang;

  readonly langToggleLabel = computed(() =>
    this.currentLang() === 'en' ? '中文' : 'EN',
  );

  readonly homeTitle = t('home.title');
  readonly footer = t('footer');

  navLabel(page: (typeof this.navPages)[number]) {
    return this.translate.translate(`nav.${page}`);
  }

  constructor() {
    this.translate.addLangs(['en', 'zh']);
    const saved = (localStorage.getItem('lang') as 'en' | 'zh' | null) ?? 'en';
    if (saved !== this.translate.getCurrentLang()) {
      this.translate.use(saved);
    }
  }

  toggleLanguage() {
    const next = this.currentLang() === 'en' ? 'zh' : 'en';
    this.translate.use(next);
    localStorage.setItem('lang', next);
  }
}
