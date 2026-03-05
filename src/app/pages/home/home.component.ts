import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LobehubIconComponent, CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentLanguage: 'en' | 'zh' = 'en';
  
  private translate = inject(TranslateService);
  
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
    });
  }

  getIconLabel(example: any): string {
    return example[this.currentLanguage] || '';
  }
}
