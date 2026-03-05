import { Component } from '@angular/core';
import { LobehubIconComponent, provideLobehubIcons } from 'angular-lobehub-icons';
import {
  IconGithub,
  IconOpenai,
  IconClaude,
  IconGooglecloud,
  IconLobehub,
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
            IconGithub,
            IconOpenai,
            IconClaude,
            IconGooglecloud,
            IconLobehub,
        }),
    ],
    template: `
    <div class="examples-grid">
      <fieldset>
        <legend>GitHub</legend>
        <i-lobehub name="github"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>GitHub (large)</legend>
        <i-lobehub name="github" style="height: 60px; width: 60px;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>OpenAI (style, blue)</legend>
        <i-lobehub name="openai" style="color: #4facfe;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>Claude (style, purple)</legend>
        <i-lobehub name="claude" style="color: #764ba2;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>Google Cloud (style, large)</legend>
        <i-lobehub name="googlecloud" style="color: #333; height: 60px; width: 60px;"></i-lobehub>
      </fieldset>

      <fieldset>
        <legend>LobehHub (style, gradient)</legend>
        <i-lobehub name="lobehub" style="color: #667eea;"></i-lobehub>
      </fieldset>
    </div>
    `,
    styles: [`
      .examples-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
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
