import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'libs/shared-modules/src';
import { faPlus, faWineBottle, faGlass } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-ingredients',
  templateUrl: './ingredients.page.html',
  styleUrls: ['./ingredients.page.scss'],
})
export class IngredientsPage implements OnInit {
  faPlus = faPlus;
  faWineBottle = faWineBottle;
  faGlass = faGlass;

  params: Params;

  constructor(
    private route: ActivatedRoute,
    private readonly translate: TranslateService,
    private readonly language: LanguageService
  ) {
    translate.setDefaultLang('en');
    this.language.lang
      .subscribe((currLang: string) => this.translate.use(currLang));
  }

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }

}
