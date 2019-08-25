import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CocktailsPage } from './cocktails.page';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { i18nPath } from '@booziir/shared';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, i18nPath('cocktails'), '.json');
}

const routes: Routes = [
  {
    path: '',
    component: CocktailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [CocktailsPage]
})
export class CocktailsPageModule { }
