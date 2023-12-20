import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './app/environments/environment';
import { enableProdMode } from '@angular/core';


if (environment.production) {
  enableProdMode()
  //show this warning only on prod mode

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


