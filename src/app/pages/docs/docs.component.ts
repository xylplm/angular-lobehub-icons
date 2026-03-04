import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [LobehubIconComponent, CommonModule, TranslateModule],
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {}
