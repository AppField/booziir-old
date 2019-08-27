import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@booziir/shared-services';
import { faGlassCitrus, faCocktail, faGlassChampagne, faGlassMartini, faGlassWhiskeyRocks, faWineGlass, faPlus, faPen } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-cocktails',
  templateUrl: './cocktails.page.html',
  styleUrls: ['./cocktails.page.scss'],
})
export class CocktailsPage implements OnInit {
  faPlus = faPlus;
  faPen = faPen;
  faGlassCitrus = faGlassCitrus;
  faCocktail = faCocktail;
  faGlassChampagne = faGlassChampagne;
  faGlassMartini = faGlassMartini;
  faGlassWhiskeyRocks = faGlassWhiskeyRocks;
  faWineGlass = faWineGlass;

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
