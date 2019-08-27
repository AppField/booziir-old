import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'libs/shared-modules/src';
import { take } from 'rxjs/operators';

@Component({
  selector: 'booziir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }
}
