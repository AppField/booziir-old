import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CocktailsPage } from './cocktails.page';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { i18nPath } from '@booziir/shared';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule, HeaderModule } from '@booziir/shared-modules';
import { CocktailsPresentationComponent } from './cocktails-presentation/cocktails-presentation.component';
import { CocktailItemComponent } from './cocktail-item/cocktail-item.component';
import { CocktailModalComponent } from './cocktail-modal/cocktail-modal.component';


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
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    HeaderModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  entryComponents: [CocktailModalComponent],
  declarations: [
    CocktailsPage,
    CocktailsPresentationComponent,
    CocktailItemComponent,
    CocktailModalComponent]
})
export class CocktailsPageModule { }
