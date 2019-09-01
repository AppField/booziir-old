import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NonLiquidIngredientsComponent } from './non-liquid-ingredients.component';
import { NonLiquidIngredientsPresentationComponent } from './non-liquid-ingredients-presentation/non-liquid-ingredients-presentation.component';
import { IngredientListHeaderModule } from '../ingredient-list-header/ingredient-list-header.module';
import { SharedModule } from '@booziir/shared-modules';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, IonicModule, IngredientListHeaderModule, SharedModule, TranslateModule],
    declarations: [NonLiquidIngredientsComponent, NonLiquidIngredientsPresentationComponent],
    exports: [NonLiquidIngredientsComponent]
})
export class NonLiquidIngredientsModule { }