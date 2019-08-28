import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BasicComponent } from '@booziir/shared';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, AuthService } from '@booziir/shared-services';

@Component({
  selector: 'booziir-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  constructor(
    private readonly translate: TranslateService,
    private readonly language: LanguageService,
    private readonly auth: AuthService
  ) {

    translate.setDefaultLang('en');
    this.language.lang
      .subscribe((currLang: string) => this.translate.use(currLang));
  }

  ngOnInit() {

  }

  signOut(): void {
    this.auth.signOut();
  }

}
