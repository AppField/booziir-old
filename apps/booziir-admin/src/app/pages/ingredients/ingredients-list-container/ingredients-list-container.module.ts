import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IngredientsListContainerComponent } from './ingredients-list-container.component';
import { IngredientsListPresentationComponent } from '../ingredients-list-presentation/ingredients-list-presentation.component';
import { IngredientListHeaderModule } from '../ingredient-list-header/ingredient-list-header.module';
import { SharedModule } from '@booziir/shared-modules';
import { TranslateModule } from '@ngx-translate/core';
import { IngredientModalComponent } from '../ingredient-modal/ingredient-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        SharedModule,
        TranslateModule,
        ReactiveFormsModule,
        IngredientListHeaderModule,
    ],
    declarations: [
        IngredientsListContainerComponent,
        IngredientsListPresentationComponent,
        IngredientModalComponent
    ],
    entryComponents: [IngredientModalComponent],
    exports: [IngredientsListContainerComponent]
})
export class IngredientsListContainerModule { }