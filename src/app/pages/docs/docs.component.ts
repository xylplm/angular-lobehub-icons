import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './docs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {}
