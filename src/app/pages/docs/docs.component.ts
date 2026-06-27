import { Component } from '@angular/core';
import { t } from '../../i18n/translate-signals';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  readonly title = t('docs.title');
  readonly installationTitle = t('docs.installation.title');
  readonly installationDesc = t('docs.installation.desc');
  readonly usageTitle = t('docs.usage.title');
  readonly usageDesc = t('docs.usage.desc');
  readonly usageCode = t('docs.usage.code');
  readonly standaloneTitle = t('docs.standalone.title');
  readonly standaloneDesc = t('docs.standalone.desc');
  readonly standaloneCode = t('docs.standalone.code');
  readonly stylingTitle = t('docs.styling.title');
  readonly stylingDesc = t('docs.styling.desc');
}
