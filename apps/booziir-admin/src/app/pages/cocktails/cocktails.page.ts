import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@booziir/shared-services';
import { ModalController } from '@ionic/angular';
import { CocktailModalComponent } from './cocktail-modal/cocktail-modal.component';
import { Cocktail } from '@booziir/shared';

@Component({
  selector: 'booziir-cocktails',
  templateUrl: './cocktails.page.html',
  styleUrls: ['./cocktails.page.scss'],
})
export class CocktailsPage implements OnInit {
  params: Params;

  constructor(
    private route: ActivatedRoute,
    private readonly translate: TranslateService,
    private readonly language: LanguageService,
    private readonly modalController: ModalController
  ) {
    translate.setDefaultLang('en');
    this.language.lang
      .subscribe((currLang: string) => this.translate.use(currLang));
  }

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }

  async openModal(cocktail?: Cocktail): Promise<void> {
    const modal = await this.modalController.create({
      component: CocktailModalComponent
    });

    modal.present();
  }
}
