import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IngredientsPage } from './ingredients.page';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { i18nPath } from '@booziir/shared';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule, HeaderModule } from '@booziir/shared-modules';
import { IngredientsListContainerModule } from './ingredients-list-container/ingredients-list-container.module';
import { IngredientsPresentationComponent } from './ingredients-presentation/ingredients-presentation.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, i18nPath('ingredients'), '.json');
}

const routes: Routes = [
  {
    path: '',
    component: IngredientsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
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
    }),
    IngredientsListContainerModule
  ],
  declarations: [
    IngredientsPage,
    IngredientsPresentationComponent
  ]
})
export class IngredientsPageModule { }
