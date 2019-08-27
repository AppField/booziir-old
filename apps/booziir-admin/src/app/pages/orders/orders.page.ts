import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '@booziir/shared-services';
import { faBan, faCheck } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'booziir-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  faBan = faBan;
  faCheck = faCheck;

  params: Params;

  constructor(
    private readonly route: ActivatedRoute,
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
