import { NgModule, ModuleWithProviders, inject } from '@angular/core';
import { LobehubIconComponent } from './lobehub-icon.component';
import { OPTIONS_TOKEN } from './options.provider';
import { OptionIcons, Options } from './options.interfaces';

/**
 * @deprecated
 *
 */
@NgModule({
  imports: [LobehubIconComponent],
  exports: [LobehubIconComponent],
})
export class LobehubIconsModule {
  private options = inject(OPTIONS_TOKEN, { optional: true });

  constructor() {
    if (!this.options) {
      throw new Error(
        `No icon provided. Make sure to use 'LobehubIconsModule.pick({ ... })' when importing the module\n` +
          `Refer to documentation on https://github.com/xylplm/angular-lobehub-icons`
      );
    }
  }

  /**
   * Initialize module with given icons and options
   * @param icons
   * @returns Module with options
   */
  static pick(
    icons: OptionIcons,
    options?: Options
  ): ModuleWithProviders<LobehubIconsModule> {
    return {
      ngModule: LobehubIconsModule,
      providers: [
        {
          provide: OPTIONS_TOKEN,
          useValue: {
            icons,
            ...options,
          },
          multi: true,
        },
      ],
    };
  }
}
