import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NonAlcoholicIngredientsComponent } from './non-alcoholic-ingredients.component';
import { NonAlcoholicIngredientsPresentationComponent } from './non-alcoholic-ingredients-presentation/non-alcoholic-ingredients-presentation.component';
import { IngredientListHeaderModule } from '../ingredient-list-header/ingredient-list-header.module';
import { SharedModule } from '@booziir/shared-modules';
import { TranslateModule } from '@ngx-translate/core';
import { NonAlcoholicModalComponent } from './non-alcoholic-modal/non-alcoholic-modal.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        IngredientListHeaderModule,
        SharedModule,
        TranslateModule
    ],
    declarations: [
        NonAlcoholicIngredientsComponent,
        NonAlcoholicIngredientsPresentationComponent,
        NonAlcoholicModalComponent
    ],
    entryComponents: [NonAlcoholicModalComponent],
    exports: [NonAlcoholicIngredientsComponent]
})
export class NonAlcoholicIngredientsModule { }