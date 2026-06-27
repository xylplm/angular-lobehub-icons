import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/** Reactive translation via ngx-translate v18 signal API. */
export function t(key: string) {
  return inject(TranslateService).translate(key);
}
