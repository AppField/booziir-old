import { Component, OnInit } from '@angular/core';
import { faCocktail, faBallot, faLemon } from '@fortawesome/pro-light-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@booziir/shared-components';
import { BasicComponent } from '@booziir/shared';

@Component({
  selector: 'booziir-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent extends BasicComponent implements OnInit {
  faCocktail = faCocktail;
  faBallot = faBallot;
  faLemon = faLemon;

  constructor(
    private readonly translate: TranslateService,
    private readonly language: LanguageService
  ) {
    super();
    translate.setDefaultLang('en');
    this.language.lang
      .subscribe((currLang: string) => this.translate.use(currLang));

  }

  ngOnInit() {
  }

}
