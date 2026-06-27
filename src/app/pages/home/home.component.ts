import { Component, computed, inject } from '@angular/core';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { TranslateService } from '@ngx-translate/core';
import { t } from '../../i18n/translate-signals';

const ICON_EXAMPLES = [
  { name: 'openai', en: 'OpenAI', zh: 'OpenAI' },
  { name: 'deepseek', en: 'DeepSeek', zh: 'DeepSeek' },
  { name: 'claude', en: 'Claude', zh: 'Claude' },
  { name: 'github', en: 'GitHub', zh: 'GitHub' },
  { name: 'googlecloud', en: 'Google Cloud', zh: '谷歌云' },
  { name: 'notebooklm', en: 'NotebookLM', zh: 'NotebookLM' },
] as const;

type AppLang = 'en' | 'zh';

@Component({
  selector: 'app-home',
  imports: [LobehubIconComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly translate = inject(TranslateService);

  readonly currentLang = this.translate.currentLang;

  readonly localizedIcons = computed(() => {
    const lang = (this.currentLang() ?? 'en') as AppLang;
    return ICON_EXAMPLES.map((example) => ({
      name: example.name,
      label: example[lang],
    }));
  });

  readonly title = t('home.title');
  readonly subtitle = t('home.subtitle');
  readonly about = t('home.about');
  readonly description = t('home.description');
  readonly quickStart = t('home.quickStart');
  readonly iconsHeading = t('home.icons');

  readonly featureIconsTitle = t('home.features.icons.title');
  readonly featureIconsDesc = t('home.features.icons.desc');
  readonly featureTreeTitle = t('home.features.tree.title');
  readonly featureTreeDesc = t('home.features.tree.desc');
  readonly featureLightTitle = t('home.features.lightweight.title');
  readonly featureLightDesc = t('home.features.lightweight.desc');
  readonly featureCustomTitle = t('home.features.custom.title');
  readonly featureCustomDesc = t('home.features.custom.desc');
}
