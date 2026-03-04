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
    { name: 'air', en: 'Air', zh: '空气' },
    { name: 'api', en: 'API', zh: 'API' },
    { name: 'archive', en: 'Archive', zh: '存档' },
    { name: 'github', en: 'GitHub', zh: 'GitHub' },
    { name: 'world', en: 'World', zh: '世界' },
    { name: 'search', en: 'Search', zh: '搜索' },
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
