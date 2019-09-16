import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlcoholicIngredientsComponent } from './alcoholic-ingredients.component';
import { AlcoholicIngredientsPresentationComponent } from './alcoholic-ingredients-presentation/alcoholic-ingredients-presentation.component';
import { IngredientListHeaderModule } from '../ingredient-list-header/ingredient-list-header.module';
import { SharedModule } from '@booziir/shared-modules';
import { TranslateModule } from '@ngx-translate/core';
import { AlcoholicModalComponent } from './alcoholic-modal/alcoholic-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        IngredientListHeaderModule,
        SharedModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    declarations: [
        AlcoholicIngredientsComponent,
        AlcoholicIngredientsPresentationComponent,
        AlcoholicModalComponent
    ],
    entryComponents: [AlcoholicModalComponent],
    exports: [AlcoholicIngredientsComponent]
})
export class AlcoholicIngredientsModule { }