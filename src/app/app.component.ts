import { ChangeDetectorRef, Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LobehubIconComponent,
    CommonModule,
    RouterModule,
    TranslatePipe,
  ],
})
export class AppComponent {
  currentLanguage: 'en' | 'zh' = (localStorage.getItem('lang') as 'en' | 'zh') || 'en';
  navPages = ['home', 'docs', 'examples'] as const;
  
  private translate = inject(TranslateService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    // 添加可用语言
    this.translate.addLangs(['en', 'zh']);
    // 设置默认语言
    this.translate.setFallbackLang('en');
    // 使用保存的语言
    this.translate.use(this.currentLanguage);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'zh' : 'en';
    this.translate.use(this.currentLanguage);
    localStorage.setItem('lang', this.currentLanguage);
    this.cdr.markForCheck();
  }

  getNavLabel(page: string): string {
    return this.translate.instant(`nav.${page}`);
  }
}

