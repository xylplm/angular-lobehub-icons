import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobehubIconComponent } from 'angular-lobehub-icons';
import { TranslateModule } from '@ngx-translate/core';
import { StandaloneComponent } from '../../standalone/standalone.component';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [LobehubIconComponent, CommonModule, TranslateModule, StandaloneComponent],
  templateUrl: './examples.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {}
