import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {}
