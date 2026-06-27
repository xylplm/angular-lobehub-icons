import { ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LobehubIconComponent, CommonModule, TranslatePipe],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentLanguage: 'en' | 'zh' = 'en';
  
  private translate = inject(TranslateService);
  private cdr = inject(ChangeDetectorRef);
  
  iconExamples = [
    { name: 'openai', en: 'OpenAI', zh: 'OpenAI' },
    { name: 'deepseek', en: 'DeepSeek', zh: 'DeepSeek' },
    { name: 'claude', en: 'Claude', zh: 'Claude' },
    { name: 'github', en: 'GitHub', zh: 'GitHub' },
    { name: 'googlecloud', en: 'Google Cloud', zh: '谷歌云' },
    { name: 'notebooklm', en: 'NotebookLM', zh: 'NotebookLM' },
  ];

  constructor() {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang as 'en' | 'zh';
      this.cdr.markForCheck();
    });
  }

  getIconLabel(example: any): string {
    return example[this.currentLanguage] || '';
  }
}
