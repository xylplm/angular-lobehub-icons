import { Component } from '@angular/core';
import { LobehubIconComponent, provideLobehubIcons } from 'angular-lobehub-icons';
import {
  IconAir,
  IconApi,
  IconArchive,
  IconGithub,
  IconWorld,
} from 'angular-lobehub-icons/icons';

@Component({
    selector: 'app-standalone',
    standalone: true,
    imports: [LobehubIconComponent],
    providers: [
        /**
         * Provide the icons which you want to use in this component.
         */
        provideLobehubIcons({
            IconAir,
            IconApi,
            IconArchive,
            IconGithub,
            IconWorld,
        }),
    ],
    template: `
    <div class="examples-grid">
      <fieldset>
        <legend>Air</legend>
        <i-lobehub name="air"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>Air (large)</legend>
        <i-lobehub name="air" style="height: 60px; width: 60px;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>API (style, blue)</legend>
        <i-lobehub name="api" style="color: #4facfe;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>Archive (style, purple)</legend>
        <i-lobehub name="archive" style="color: #764ba2;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>GitHub (style, large)</legend>
        <i-lobehub name="github" style="color: #333; height: 60px; width: 60px;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>World (style, gradient)</legend>
        <i-lobehub name="world" style="color: #667eea;"></i-lobehub>
      </fieldset>
    </div>
    `,
    styles: [`
      .examples-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
      }

      fieldset {
        padding: 1.5rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        legend {
          padding: 0 0.5rem;
          font-weight: 600;
          color: #333;
          font-size: 0.9rem;
        }

        i-lobehub {
          font-size: 3rem;
          color: #667eea;
          display: block;
          margin: 0.8rem 0;
        }
      }
    `]
})
export class StandaloneComponent {}
