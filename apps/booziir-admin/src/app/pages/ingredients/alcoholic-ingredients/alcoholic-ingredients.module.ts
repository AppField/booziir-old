import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlcoholicIngredientsComponent } from './alcoholic-ingredients.component';
import { AlcoholicIngredientsPresentationComponent } from './alcoholic-ingredients-presentation/alcoholic-ingredients-presentation.component';
import { IngredientListHeaderModule } from '../ingredient-list-header/ingredient-list-header.module';
import { SharedModule } from '@booziir/shared-modules';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [CommonModule, IonicModule, IngredientListHeaderModule, SharedModule, TranslateModule],
    declarations: [AlcoholicIngredientsComponent, AlcoholicIngredientsPresentationComponent],
    exports: [AlcoholicIngredientsComponent]
})
export class AlcoholicIngredientsModule { }