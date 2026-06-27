import { Component } from '@angular/core';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { StandaloneComponent } from '../../standalone/standalone.component';
import { t } from '../../i18n/translate-signals';

@Component({
  selector: 'app-examples',
  imports: [LobehubIconComponent, StandaloneComponent],
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {
  readonly title = t('examples.title');
  readonly basicTitle = t('examples.basic.title');
  readonly sizingTitle = t('examples.sizing.title');
  readonly coloringTitle = t('examples.coloring.title');
  readonly standaloneTitle = t('examples.standalone.title');
  readonly standaloneDesc = t('examples.standalone.desc');
}
